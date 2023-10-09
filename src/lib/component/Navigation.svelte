<script lang="ts">
	import { NAVIGATION_LIST } from '$lib/const';

	export let isOpen = false;
	export let handleLinkClick: () => void;
</script>

<svelte:head>
	{#if isOpen}
		<style>
			body {
				overflow: clip;
			}
		</style>
	{/if}
</svelte:head>

<div
	class:isOpen
	class="navigation u-dynamicHeight fixed top-16 tablet:top-20 left-0 w-full grid place-items-center z-50 u-backdrop-white"
>
	<nav class="max-w-screen-tablet w-full px-6 tablet:px-8 laptop:px-10">
		<ul>
			{#each NAVIGATION_LIST as { title, path }, index}
				<li class="animate-fadeInDown opacity-0" style="animation-delay:{150 + index * 50}ms">
					<a class="inline-block text-title text-body" href={path} on:click={handleLinkClick}
						>{title}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style lang="postcss">
	.navigation {
		opacity: 0;
		transition: 0.25s;
		pointer-events: none;
		&.isOpen {
			opacity: 1;
			pointer-events: all;
		}
	}
</style>
