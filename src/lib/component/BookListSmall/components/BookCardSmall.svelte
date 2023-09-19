<script lang="ts">
	import BookModal from '../../BookModal.svelte';
	import FaArrowUpRightFromSquare from '../../Icons/FaArrowUpRightFromSquare.svelte';
	import FaCommentDots from '../../Icons/FaCommentDots.svelte';

	import type { BookItems, ReviewedWith } from '$lib/server/types';

	export let bookItem: ReviewedWith<BookItems>;

	let isOpen = false;
	function handleClick() {
		isOpen = !isOpen;
	}
	$: ({ volumeInfo, review } = bookItem);
</script>

<div class="flex gap-x-4 items-center text-body">
	<figure class="w-16 h-24 overflow-hidden rounded-md border flex-shrink-0">
		<img class="w-full h-full object-cover" src={volumeInfo.imageLinks?.thumbnail} alt="" />
	</figure>
	<div class="flex flex-col gap-y-1">
		<p class="text-label font-bold line-clamp-2">{volumeInfo.title}</p>
		<ul class="flex gap-x-2">
			<li>
				{#if review}
					<button class="iconWrapper u-link-hover" on:click={handleClick}>
						<FaCommentDots className="h-4 fill-body" />
					</button>
				{:else}
					<div class="iconWrapper">
						<FaCommentDots className="h-4 fill-disabled" />
					</div>
				{/if}
			</li>
			<li>
				{#if volumeInfo.infoLink}
					<a
						class="iconWrapper u-link-hover"
						href={volumeInfo.infoLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaArrowUpRightFromSquare className="h-3 fill-body" />
					</a>
				{:else}
					<div class="iconWrapper">
						<FaArrowUpRightFromSquare className="h-3 fill-disabled" />
					</div>
				{/if}
			</li>
		</ul>
	</div>
</div>
<BookModal {bookItem} {isOpen} onClickCloseButton={handleClick} />

<style lang="postcss">
	.iconWrapper {
		@apply w-8 h-8 grid place-items-center overflow-hidden rounded-full bg-white border shadow;
	}
</style>
