<script lang="ts">
	import { isDeskTop } from '../../store.js';

	import type { PageData } from './$types.js';

	import { page } from '$app/stores';
	import BookListLarge from '$lib/component/BookListLarge/BookListLarge.svelte';
	import BookListSmall from '$lib/component/BookListSmall/BookListSmall.svelte';
	import Head from '$lib/component/Head.svelte';
	import TabButton from '$lib/component/TabButton.svelte';

	export let data: PageData;
	$: ({ favoriteBookShelves, forBeginnerBookShelves, toReadBookShelves, goodBooksShelves } = data);
	$: bookShelves = [goodBooksShelves, forBeginnerBookShelves, toReadBookShelves];
	let activeTabIndex = 0;

	function setActiveTabIndex(index: number) {
		activeTabIndex = index;
	}
</script>

<Head
	pageTitle="Books"
	description="エンジニアとしての重要な「思考方法」や「テクニック」を磨くための書籍を紹介しています。"
	pathName={$page.url.pathname}
/>

<div class="bg-lightTertiary dark:bg-lightPrimary">
	<div class="shadow-md bg-white dark:bg-lightSecondary">
		<div class="l-container py-6 tablet:py-8 laptop:py-10 mb-6">
			<h1 class="text-heading-1 mb-6 dark:text-lightWhite">{favoriteBookShelves.title}</h1>
			<BookListLarge bookItems={favoriteBookShelves.bookList} />
		</div>
	</div>
	<div class="l-container pb-6 tablet:pb-8 laptop:pb-10">
		{#if !$isDeskTop}
			<div
				role="tablist"
				class="w-full grid auto-cols-fr grid-flow-col rounded-lg overflow-hidden border shadow bg-white dark:bg-lightBody dark:border-black"
			>
				{#each bookShelves as { title }, index}
					<TabButton
						handleClick={() => setActiveTabIndex(index)}
						isActive={activeTabIndex === index}
						label={title}
					/>
				{/each}
			</div>
		{/if}
		<div class="flex gap-x-10 overflow-x-scroll">
			{#each bookShelves as { bookList, title }, index (title)}
				{#if $isDeskTop}
					<div class="flex-shrink-0 w-80">
						<p class="text-body font-bold dark:text-lightWhite">{title}</p>
						<BookListSmall bookItems={bookList} />
					</div>
				{:else if activeTabIndex === index}
					<div role="tabpanel" class="w-full" hidden={activeTabIndex !== index}>
						<BookListSmall bookItems={bookList} />
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
