import rehypeAttrs from 'rehype-attr';
import rehypeClassNames, { type Options } from 'rehype-class-names';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

/**
 * ブログ記事本文をHTMLに変換する
 * @param markdown frontmatterを除いたMarkdown本文
 */
export const blogMarkdownToHtml = async (markdown: string): Promise<string> => {
	const options: Options = {
		'h1,h2,h3,h4,h5,h6': 'font-bold text-body dark:text-lightWhite',
		'p,a': 'text-body dark:text-lightBody',
		table: 'u-table',
		ul: 'u-list',
		a: 'text-link dark:text-link',
		blockquote: 'u-blockquote'
	};
	const html = await unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeRaw)
		.use(rehypeSlug)
		.use(rehypePrettyCode, {
			theme: { light: 'github-light', dark: 'github-dark' },
			keepBackground: false
		})
		.use(rehypeAttrs, { properties: 'attr' })
		// @ts-expect-error 型解決ができないため
		.use(rehypeClassNames, options)
		.use(rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] })
		.use(rehypeStringify)
		.process(markdown);

	return html.toString();
};
