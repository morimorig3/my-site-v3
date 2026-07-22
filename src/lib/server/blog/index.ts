import { error } from '@sveltejs/kit';

import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

import matter from 'gray-matter';

import { blogMarkdownToHtml } from './markdown';

import type { BlogFrontmatter } from '$lib/schemas/types';

import { ERROR_MESSAGE_COMMON } from '$lib/const';
import { blogFrontmatterSchema } from '$lib/schemas';

const BLOG_DIR = 'data/blog';

export type BlogPostSummary = BlogFrontmatter;

export interface BlogPost extends BlogPostSummary {
	html: string;
}

async function readAllDirNames(): Promise<string[]> {
	const entries = await readdir(BLOG_DIR, { withFileTypes: true }).catch(() => []);
	return entries
		.filter((entry) => entry.isDirectory() && !entry.name.startsWith('.'))
		.map((entry) => entry.name);
}

async function readFrontmatterAndBody(dirName: string) {
	const raw = await readFile(join(BLOG_DIR, dirName, 'index.md'), { encoding: 'utf-8' });
	const { data, content } = matter(raw);

	try {
		return { frontmatter: blogFrontmatterSchema.parse(data), content };
	} catch (e) {
		throw new Error(`Invalid frontmatter in ${BLOG_DIR}/${dirName}/index.md: ${e}`);
	}
}

/** 本文中の相対画像参照を、Viteが data/blog/{dirName}/ からコピーする配信URLに書き換える */
function resolveImagePaths(markdown: string, dirName: string): string {
	return markdown.replace(
		/(!\[[^\]]*]\()(?!https?:\/\/|\/)([^)]+)(\))/g,
		(_match, pre: string, path: string, post: string) => `${pre}/blog/${dirName}/${path}${post}`
	);
}

/**
 * ブログ記事一覧を取得(公開日降順、draftは除外)
 */
export async function loadBlogPostList(): Promise<BlogPostSummary[]> {
	const dirNames = await readAllDirNames();
	const posts = await Promise.all(
		dirNames.map(async (dirName) => {
			const { frontmatter } = await readFrontmatterAndBody(dirName);
			return frontmatter;
		})
	);

	return posts.filter((post) => !post.draft).sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * slugを指定してブログ記事詳細を取得
 */
export async function loadBlogPost(slug: string): Promise<BlogPost> {
	const dirNames = await readAllDirNames();
	const candidates = await Promise.all(
		dirNames.map(async (dirName) => ({ dirName, ...(await readFrontmatterAndBody(dirName)) }))
	);

	const match = candidates.find(({ frontmatter }) => frontmatter.slug === slug);
	if (!match) {
		error(404, { message: ERROR_MESSAGE_COMMON });
	}

	const html = await blogMarkdownToHtml(resolveImagePaths(match.content, match.dirName));

	return { ...match.frontmatter, html };
}
