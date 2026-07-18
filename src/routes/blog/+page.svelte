<script lang="ts">
	import { page } from '$app/state';
	import Head from '$lib/component/Head.svelte';
	import { formatDate } from '$lib/functions/formatDate';

	export let data;
	$: ({ posts } = data);
</script>

<Head
	pageTitle="Blog"
	description="Web開発技術に関する学習メモを公開しています"
	pathName={page.url.pathname}
/>

<div class="l-container py-6 tablet:py-8 laptop:py-10">
	<h1 class="text-heading-1 mb-6 dark:text-lightWhite">Blog</h1>
	<ul class="flex flex-col gap-y-6">
		{#each posts as { slug, title, date, description, tags }}
			<li>
				<a
					href={`/blog/${slug}`}
					class="u-link-hover block rounded-lg border p-4 shadow dark:border-black dark:bg-lightSecondary"
				>
					<p class="text-label-sm text-placeholder dark:text-lightBody">{formatDate(date)}</p>
					<p class="text-heading-4 mt-1 dark:text-lightWhite">{title}</p>
					<p class="text-body-sm text-description mt-2 dark:text-lightBody">{description}</p>
					{#if tags.length > 0}
						<ul class="mt-3 flex flex-wrap gap-2">
							{#each tags as tag}
								<li class="topic">{tag}</li>
							{/each}
						</ul>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</div>
