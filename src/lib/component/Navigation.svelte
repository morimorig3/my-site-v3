<script lang="ts">
	import { expoOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	import { NAVIGATION_LIST } from '$lib/const';

	export let isOpen = false;
</script>

{#if isOpen}
	<div
		transition:slide={{ duration: 250, easing: expoOut }}
		class="dynamicHeight fixed top-16 tablet:top-20 left-0 w-full grid place-items-center bg-primary backdrop-blur-sm"
	>
		<nav class="max-w-screen-tablet w-full">
			<ul>
				{#each NAVIGATION_LIST as { title, path }, index}
					<li class="animate-fadeInDown opacity-0" style="animation-delay:{150 + index * 50}ms">
						<a
							class="inline-block text-title text-white hover:translate-x-2 transition-transform"
							href={path}>{title}</a
						>
					</li>
				{/each}
			</ul>
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
