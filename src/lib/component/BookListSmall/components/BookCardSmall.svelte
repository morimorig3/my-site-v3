<script lang="ts">
	import BookModal from '../../BookModal.svelte';
	import FaArrowUpRightFromSquare from '../../Icons/FaArrowUpRightFromSquare.svelte';
	import FaCommentDots from '../../Icons/FaCommentDots.svelte';

	import type { ReviewedWith } from '$lib/server/books/types';
	import type { BookItem } from '$lib/server/googleBooks/types';

	export let bookItem: ReviewedWith<BookItem>;

	let isOpen = false;
	function handleClick() {
		isOpen = !isOpen;
	}
	$: ({ volumeInfo, review } = bookItem);
</script>

<div class="flex gap-x-4 items-center text-body">
	<figure class="w-16 h-24 overflow-hidden rounded-md border flex-shrink-0 dark:border-0">
		<img class="w-full h-full object-cover" src={volumeInfo.imageLinks?.thumbnail} alt="" />
	</figure>
	<div class="flex flex-col gap-y-1">
		<p class="text-label font-bold line-clamp-2 dark:text-lightWhite">{volumeInfo.title}</p>
		<ul class="flex gap-x-2">
			<li>
				{#if review}
					<button
						class="u-circle-icon hover:bg-sky-50 dark:bg-lightWhite dark:hover:bg-lightBody"
						on:click={handleClick}
					>
						<FaCommentDots className="h-4 fill-body" />
					</button>
				{:else}
					<div class="u-circle-icon">
						<FaCommentDots className="h-4 fill-disabled" />
					</div>
				{/if}
			</li>
			<li>
				{#if volumeInfo.infoLink}
					<a
						class="u-circle-icon hover:bg-sky-50 dark:bg-lightWhite dark:hover:bg-lightBody"
						href={volumeInfo.infoLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaArrowUpRightFromSquare className="h-3 fill-body" />
					</a>
				{:else}
					<div class="u-circle-icon">
						<FaArrowUpRightFromSquare className="h-3 fill-disabled" />
					</div>
				{/if}
			</li>
		</ul>
	</div>
</div>
<BookModal {bookItem} {isOpen} handleCloseModal={handleClick} />
