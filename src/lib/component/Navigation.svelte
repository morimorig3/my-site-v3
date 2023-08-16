<script lang="ts">
	import { expoOut } from 'svelte/easing';
	import { slide, fly } from 'svelte/transition';

	export let isOpen = false;
</script>

{#if isOpen}
	<div
		transition:slide={{ duration: 250, easing: expoOut }}
		class="dynamicHeight fixed top-16 tablet:top-20 left-0 w-full grid place-items-center bg-primary"
	>
		<nav class="max-w-screen-tablet w-full flex flex-col">
			<a in:fly={{ delay: 250, y: -50 }} class="text-title text-white" href="/about">ABOUT</a>
			<a in:fly={{ delay: 300, y: -50 }} class="text-title text-white" href="/develop">DEVELOP</a>
			<a in:fly={{ delay: 350, y: -50 }} class="text-title text-white" href="/projects">PROJECTS</a>
			<a in:fly={{ delay: 400, y: -50 }} class="text-title text-white" href="/books">BOOKS</a>
		</nav>
	</div>
{/if}

<style lang="postcss">
	.dynamicHeight {
		height: calc(100% - theme(space.16));
		@media (min-width: theme(screens.tablet)) {
			height: calc(100% - theme(space.20));
		}
	}
</style>
