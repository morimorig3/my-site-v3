import type { PageServerLoad } from './$types';

import { loadBlogPost } from '$lib/server/blog';

export const load: PageServerLoad = async ({ params }) => {
	const post = await loadBlogPost(params.slug);
	return { post };
};
