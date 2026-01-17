<script lang="ts">
	import { fade } from 'svelte/transition';

	import { filterTopics } from '../../store.js';

	import { page } from '$app/state';
	import DevelopCardList from '$lib/component/DevelopCardList/DevelopCardList.svelte';
	import DevelopCard from '$lib/component/DevelopCardList/components/DevelopCard.svelte';
	import Head from '$lib/component/Head.svelte';

	export let data;
	$: ({ developList } = data);
	$: filteredItems = $filterTopics.length
		? developList.filter(({ topics }) => {
				return topics?.some((topic) => $filterTopics.includes(topic));
			})
		: developList;
</script>

<Head
	pageTitle="Develop"
	description="新しい技術スキルを身につける過程で制作した作品を紹介しています。"
	pathName={page.url.pathname}
/>

<div class="l-container py-6 tablet:py-8 laptop:py-10">
	<div class="flex flex-col gap-y-6">
		{#if $filterTopics.length}
			<div transition:fade={{ duration: 250 }} class="flex flex-col gap-y-2 items-start">
				<ul class="flex gap-2 flex-wrap">
					{#each $filterTopics as topic}
						<li>
							<button
								class="topic relative dark:bg-lightBody dark:text-lightSecondary"
								on:click={() => filterTopics.remove(topic)}
							>
								#{topic}
								<span
									class="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 grid place-items-center text-white bg-red-500 text-label-sm rounded-full w-5 h-5 font-bold"
									>×</span
								>
							</button>
						</li>
					{/each}
				</ul>
				<button
					class="px-2 text-description text-caption-sm dark:text-lightBody"
					on:click={filterTopics.reset}>絞り込みを解除</button
				>
			</div>
		{/if}
		<DevelopCardList>
			{#each filteredItems as item}
				<li transition:fade={{ duration: 250 }}>
					<DevelopCard {item} />
				</li>
			{/each}
		</DevelopCardList>
	</div>
</div>
