<script lang="ts">
	import HamburgerMenu from './HamburgerMenu.svelte';
	import Navigation from './Navigation.svelte';

	import { NAVIGATION_LIST } from '$lib/const';

	let isOpen = false;
	let y: number;
	$: isScroll = y > 0;
	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<svelte:window bind:scrollY={y} />

<header
	class="fixed top-0 w-full z-50 transition-shadow duration-250 border-b u-backdrop-white"
	class:isScroll
>
	<div class="l-container flex items-center justify-between relative h-16 tablet:h-20">
		<a class="font-bold text-lg tablet:text-xl text-body" href="/">morimorig3.com</a>
		<nav class="hidden laptop:block">
			<ul class="flex gap-x-4">
				{#each NAVIGATION_LIST as { title, path }}
					<li>
						<a class="text-label font-bold text-body" href={path}>{title}</a>
					</li>
				{/each}
			</ul>
		</nav>
		<button class="laptop:hidden" on:click={toggleMenu}>
			<HamburgerMenu {isOpen} />
		</button>
	</div>
</header>
<Navigation handleLinkClick={toggleMenu} {isOpen} />

<style lang="postcss">
	.isScroll {
		@apply shadow-md;
	}
</style>
