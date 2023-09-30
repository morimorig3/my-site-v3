<script lang="ts">
	import BookModal from '../../BookModal.svelte';

	import type { BookItems, ReviewedWith } from '$lib/server/books/types';

	import { toSingleByteChar } from '$lib/functions/toSingleByteChar';

	export let bookItem: ReviewedWith<BookItems>;
	let isOpen = false;
	function openModal() {
		isOpen = true;
	}
	function closeModal() {
		isOpen = false;
	}
	$: ({ volumeInfo } = bookItem);
</script>

<div
	class="w-40 flex-shrink-0 flex flex-col gap-y-4"
	role="button"
	tabindex="0"
	on:click={openModal}
	on:keydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			openModal();
		}
	}}
>
	<div class="h-52 overflow-hidden border rounded-xl shadow-md">
		<figure class="hover:scale-105 transition-transform duration-200">
			<img class="w-full h-full object-cover" src={volumeInfo.imageLinks?.thumbnail} alt="" />
		</figure>
	</div>
	<div class="flex flex-col gap-y-1">
		<p class="text-label font-bold line-clamp-2">{volumeInfo.title}</p>
		{#if volumeInfo.authors?.length}
			<p class="text-label-sm text-description line-clamp-2">
				{volumeInfo.authors?.map(toSingleByteChar).join(' / ')}
			</p>
		{/if}
	</div>
</div>
<BookModal {bookItem} {isOpen} onClickCloseButton={closeModal} />
