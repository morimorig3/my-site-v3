<script lang="ts">
	import DevelopCardHeader from './components/DevelopCardHeader.svelte';
	import DevelopLanguage from './components/DevelopLanguage.svelte';
	import LinkList from './components/LinkList.svelte';
	import TopicList from './components/TopicList.svelte';

	import type { GitHubGetUserReposData } from '$lib/server/githubAPI/types';

	import { formatDate } from '$lib/functions/formatDate';

	export let item: GitHubGetUserReposData;
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
	{#if item.topics}
		<TopicList />
	{/if}
</div>

<style lang="postcss">
	.wrapper {
		@apply p-4 border flex flex-col gap-y-2 h-full;
	}
</style>
