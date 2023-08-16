<script lang="ts">
	import { expoOut } from 'svelte/easing';
	import { slide, fly } from 'svelte/transition';

	export let isOpen = false;
</script>

{#if isOpen}
	<div
		transition:slide={{ duration: 250, easing: expoOut }}
		class="fixed top-0 left-0 w-full h-full grid place-items-center backdrop-blur-md"
	>
		<nav class="max-w-screen-tablet w-full flex flex-col">
			<a in:fly={{ delay: 250, y: -50 }} class="text-title" href="/about">ABOUT</a>
			<a in:fly={{ delay: 300, y: -50 }} class="text-title" href="/develop">DEVELOP</a>
			<a in:fly={{ delay: 350, y: -50 }} class="text-title" href="/projects">PROJECTS</a>
			<a in:fly={{ delay: 400, y: -50 }} class="text-title" href="/books">BOOKS</a>
		</nav>
	</div>
{/if}
