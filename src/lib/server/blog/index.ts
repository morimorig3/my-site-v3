import { error } from '@sveltejs/kit';

import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

import matter from 'gray-matter';

import { blogMarkdownToHtml } from './markdown';

import type { BlogFrontmatter } from '$lib/schemas/types';

import { ERROR_MESSAGE_COMMON } from '$lib/const';
import { blogFrontmatterSchema } from '$lib/schemas';

const BLOG_DIR = 'data/blog';

export interface BlogPostSummary extends BlogFrontmatter {
	slug: string;
}

export interface BlogPost extends BlogPostSummary {
	html: string;
}

async function readAllSlugs(): Promise<string[]> {
	const entries = await readdir(BLOG_DIR, { withFileTypes: true }).catch(() => []);
	return entries
		.filter((entry) => entry.isDirectory() && !entry.name.startsWith('.'))
		.map((entry) => entry.name);
}

async function readFrontmatterAndBody(slug: string) {
	const raw = await readFile(join(BLOG_DIR, slug, 'index.md'), { encoding: 'utf-8' });
	const { data, content } = matter(raw);

	try {
		return { frontmatter: blogFrontmatterSchema.parse(data), content };
	} catch (e) {
		throw new Error(`Invalid frontmatter in ${BLOG_DIR}/${slug}/index.md: ${e}`);
	}
}

/** 本文中の相対画像参照を、Viteが data/blog/{slug}/ からコピーする配信URLに書き換える */
function resolveImagePaths(markdown: string, slug: string): string {
	return markdown.replace(
		/(!\[[^\]]*]\()(?!https?:\/\/|\/)([^)]+)(\))/g,
		(_match, pre: string, path: string, post: string) => `${pre}/blog/${slug}/${path}${post}`
	);
}

/**
 * ブログ記事一覧を取得(公開日降順、draftは除外)
 */
export async function loadBlogPostList(): Promise<BlogPostSummary[]> {
	const slugs = await readAllSlugs();
	const posts = await Promise.all(
		slugs.map(async (slug) => {
			const { frontmatter } = await readFrontmatterAndBody(slug);
			return { slug, ...frontmatter };
		})
	);

	return posts.filter((post) => !post.draft).sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * slugを指定してブログ記事詳細を取得
 */
export async function loadBlogPost(slug: string): Promise<BlogPost> {
	const slugs = await readAllSlugs();
	if (!slugs.includes(slug)) {
		error(404, { message: ERROR_MESSAGE_COMMON });
	}

	const { frontmatter, content } = await readFrontmatterAndBody(slug);
	const html = await blogMarkdownToHtml(resolveImagePaths(content, slug));

	return { slug, ...frontmatter, html };
}
