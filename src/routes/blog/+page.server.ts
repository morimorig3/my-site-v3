import type { PageServerLoad } from './$types';

import { loadBlogPostList } from '$lib/server/blog';

export const load: PageServerLoad = async () => {
	const posts = await loadBlogPostList();
	return { posts };
};
