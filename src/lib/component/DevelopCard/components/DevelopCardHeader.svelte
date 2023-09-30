<script lang="ts">
	import { onMount } from 'svelte';

	export let name: string;
	export let description: string | null;

	let descriptionElement: HTMLParagraphElement;
	let descriptionHeight: number;
	let isOpen = false;
	const MIN_HEIGHT = 63;

	onMount(() => {
		descriptionHeight = descriptionElement.clientHeight;
	});

	function open() {
		isOpen = true;
	}

	$: isOverflow = descriptionHeight > MIN_HEIGHT;
</script>

<header>
	<p class="text-body font-bold">{name}</p>
	{#if description}
		<div class="relative">
			<p
				class:isOpen
				class:isOverflow
				bind:this={descriptionElement}
				class="text-label text-description overflow-hidden transition-all"
			>
				{description}
			</p>
			{#if isOverflow && !isOpen}
				<button on:click={open} class="more">More...</button>
			{/if}
		</div>
	{/if}
</header>

<style lang="postcss">
	.isOverflow {
		height: 63px;
	}
	.isOpen {
		height: auto;
	}
	.more {
		text-shadow: 2px 2px 0 white, -2px 2px 0 white, 2px -2px 0 white, -2px -2px 0 white;
		&::after {
			content: '';
			height: 30px;
			background-image: linear-gradient(
				to top,
				rgba(255, 255, 255, 1) 0%,
				rgba(255, 255, 255, 0) 100%
			);
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: -1;
		}
		z-index: 1;
		@apply text-label text-link font-bold flex justify-end  absolute bottom-0 left-0 right-0;
	}
</style>
