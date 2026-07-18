<script lang="ts">
	import { page } from '$app/state';
	import Head from '$lib/component/Head.svelte';
	import { formatDate } from '$lib/functions/formatDate';

	export let data;
	$: ({ title, date, description, tags, html } = data.post);
</script>

<Head pageTitle={`Blog - ${title}`} {description} pathName={page.url.pathname} />

<div class="l-container py-6 tablet:py-8 laptop:py-10">
	<article>
		<p class="text-label-sm text-placeholder dark:text-lightBody">{formatDate(date)}</p>
		<h1 class="text-heading-1 mt-1 dark:text-lightWhite">{title}</h1>
		{#if tags.length > 0}
			<ul class="mt-3 flex flex-wrap gap-2">
				{#each tags as tag}
					<li class="topic">{tag}</li>
				{/each}
			</ul>
		{/if}
		<!-- eslint-disable-next-line -->
		<div class="u-markdown text-body dark:text-lightBody mt-6">{@html html}</div>
	</article>
</div>
