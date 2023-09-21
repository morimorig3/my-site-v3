<script lang="ts">
	import Divider from './Divider.svelte';
	import HalfModal from './HalfModal.svelte';
	import FaArrowUpRightFromSquare from './Icons/FaArrowUpRightFromSquare.svelte';

	import type { BookItems, ReviewedWith } from '$lib/server/types';

	import { toSingleByteChar } from '$lib/functions/toSingleByteChar';
	export let isOpen: boolean;
	export let onClickCloseButton: () => void;
	export let bookItem: ReviewedWith<BookItems>;
	$: ({ volumeInfo, review } = bookItem);
</script>

<HalfModal
	ariaLabelledby="book-modal-title"
	ariaDescribedby="book-modal-description"
	{isOpen}
	{onClickCloseButton}
>
	<div class="flex flex-col gap-y-4">
		<header class="flex flex-col">
			<h1 class="text-body font-bold" id="book-modal-title">{volumeInfo.title}</h1>
			{#if volumeInfo.authors?.length}
				<p class="text-label text-description">
					{volumeInfo.authors?.map(toSingleByteChar).join(' / ')}
				</p>
			{/if}
		</header>
		<figure class="h-48 flex justify-center">
			<img class="h-full" src={volumeInfo.imageLinks?.thumbnail} alt="" />
		</figure>
		{#if review}
			<div id="book-modal-description">
				<h2 class="text-body font-bold">書評</h2>
				<!-- eslint-disable-next-line -->
				<p class="text-body">{@html review}</p>
			</div>
		{/if}
		<Divider />
		<div class="flex justify-end">
			<a
				class="flex items-center gap-x-1 text-body-sm"
				href={volumeInfo.infoLink}
				target="_blank"
				rel="noopener noreferrer"
				>GooglePlayストアでみる<FaArrowUpRightFromSquare className="fill-link" /></a
			>
		</div>
	</div>
</HalfModal>
