import rehypeClassNames, { type Options } from 'rehype-class-names';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

/**
 * マークダウンを読み込んでHTMLに変換する
 * @param markdown
 */
export const markdownToHtml = async (markdown: string): Promise<string> => {
	const options: Options = {
		'h1,h2,h3,h4,h5,h6': 'font-bold text-body dark:text-lightWhite',
		'p,a': 'text-body dark:text-lightBody',
		ul: 'u-list',
		a: 'text-link dark:text-link',
		blockquote: 'u-blockquote'
	};
	const html = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		// @ts-expect-error 型解決ができないため
		.use(rehypeClassNames, options)
		.use(rehypeStringify)
		.process(markdown);

	return html.toString();
};
