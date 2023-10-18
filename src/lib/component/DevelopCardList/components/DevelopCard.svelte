<script lang="ts">
	import DevelopCardHeader from './DevelopCardHeader.svelte';
	import DevelopLanguage from './DevelopLanguage.svelte';
	import LinkList from './LinkList.svelte';
	import TopicList from './TopicList.svelte';

	import type { GitHubGetUserReposData } from '$lib/server/github/types';

	import { formatDate } from '$lib/functions/formatDate';

	export let item: GitHubGetUserReposData;
	export let disableSort = false;
</script>

<div class="wrapper">
	<DevelopCardHeader name={item.name} description={item.description} />
	<div class="flex flex-col">
		{#if item.created_at}
			<p class="text-label-sm text-description">create: {formatDate(item.created_at)}</p>
		{/if}
	</div>
	{#if item.language}
		<DevelopLanguage language={item.language} />
	{/if}
	<LinkList homepageHref={item.homepage} htmlHref={item.html_url} />
	{#if item.topics && !disableSort}
		<TopicList topics={item.topics} />
	{/if}
</div>

<style lang="postcss">
	.wrapper {
		@apply p-4 border flex flex-col gap-y-2 h-full;
	}
</style>
