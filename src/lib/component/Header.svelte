<script lang="ts">
	import HamburgerMenu from './HamburgerMenu.svelte';
	import Navigation from './Navigation.svelte';

	let isOpen = false;
	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<header class="fixed top-0 w-full bg-primary backdrop-blur-sm z-50">
	<div class="l-container flex items-center justify-between relative h-16 tablet:h-20">
		<a class="font-bold text-lg tablet:text-xl text-white" href="/">morimorig3.com</a>
		<button on:click={toggleMenu}>
			<HamburgerMenu {isOpen} />
		</button>
	</div>
</header>
<Navigation handleLinkClick={toggleMenu} {isOpen} />
