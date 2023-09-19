<script lang="ts">
	import BookListLarge from '$lib/component/BookListLarge/BookListLarge.svelte';
	import BookListSmall from '$lib/component/BookListSmall/BookListSmall.svelte';
	export let data;
	$: ({ favorite, forBeginner, toRead } = data);
	$: bookList = [favorite, forBeginner, toRead];
	let activeTabIndex = 0;
	let screenSize: number;
	$: isDesktop = screenSize > 959;

	function setActiveTabIndex(index: number) {
		activeTabIndex = index;
	}
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="bg-gray-50">
	<div class="shadow-md bg-white">
		<div class="l-container py-6 tablet:py-8 laptop:py-10 mb-6">
			<h1 class="text-heading-1 mb-6">{favorite.title}</h1>
			<BookListLarge bookItems={favorite.items} />
		</div>
	</div>
	<div class="l-container pb-6 tablet:pb-8 laptop:pb-10">
		{#if !isDesktop}
			<div
				role="tablist"
				class="w-full grid auto-cols-fr grid-flow-col rounded-lg border shadow bg-white"
			>
				{#each bookList as { title }, index}
					<button on:click={() => setActiveTabIndex(index)}
						><span
							class:text-placeholder={activeTabIndex !== index}
							class="block p-3 text-label font-bold u-link-hover">{title}</span
						></button
					>
				{/each}
			</div>
		{/if}
		<div class="flex gap-x-10 overflow-x-scroll">
			{#each bookList as { items, title }, index (title)}
				{#if isDesktop}
					<div class="flex-shrink-0 w-80">
						<p class="text-body font-bold">{title}</p>
						<BookListSmall bookItems={items} />
					</div>
				{:else if activeTabIndex === index}
					<div role="tabpanel" class="w-full" hidden={activeTabIndex !== index}>
						<BookListSmall bookItems={items} />
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
