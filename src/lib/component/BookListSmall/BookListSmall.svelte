<script lang="ts">
	import { slide } from 'svelte/transition';

	import CustomButton from '../CustomButton.svelte';

	import BookCardSmall from './components/BookCardSmall.svelte';

	import type { ReviewedWith } from '$lib/server/books/types';
	import type { BookItem } from '$lib/server/googleBooks/types';

	export let bookItems: ReviewedWith<BookItem>[];
	const ITEMS_PER_PAGE = 3;
	let pageCount = 1;
	$: isLoadAllItems = bookItems.length > pageCount * 3;
	$: restItemsLength = bookItems.length - pageCount * 3;
	function loadNext() {
		pageCount += 1;
	}
</script>

<ul class="flex flex-col gap-y-6 py-6">
	{#each bookItems as item, index}
		{#if index < pageCount * ITEMS_PER_PAGE}
			<li transition:slide>
				<BookCardSmall bookItem={item} />
			</li>
		{/if}
	{/each}
</ul>
{#if isLoadAllItems}
	<CustomButton handleClick={loadNext} label="もっと見る">
		<span
			class="grid place-items-center text-white bg-red-500 text-label rounded-full w-6 h-6 absolute right-4 top-1/2 -translate-y-1/2"
			>{restItemsLength}</span
		>
	</CustomButton>
{/if}
