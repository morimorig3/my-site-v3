<script lang="ts">
	import { fade } from 'svelte/transition';

	export let isOpen = false;
</script>

{#if isOpen}
	<div
		transition:fade
		class="fixed top-0 left-0 w-full h-full grid place-items-center backdrop-blur-md"
	>
		<nav class="max-w-screen-tablet w-full flex flex-col">
			<a class="text-title" href="/about">ABOUT</a>
			<a class="text-title" href="/develop">DEVELOP</a>
			<a class="text-title" href="/projects">PROJECTS</a>
			<a class="text-title" href="/books">BOOKS</a>
		</nav>
	</div>
{/if}
