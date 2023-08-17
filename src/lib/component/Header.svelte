<script lang="ts">
	import HamburgerMenu from './HamburgerMenu.svelte';
	import Navigation from './Navigation.svelte';

	let isOpen = false;
	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<header class="fixed top-0 w-full bg-primary backdrop-blur-sm">
	<div class="custom-container flex items-center justify-between relative z-50 h-16 tablet:h-20">
		<a class="font-bold text-lg tablet:text-xl text-white" href="/">morimorig3.com</a>
		<button on:click={toggleMenu}>
			<HamburgerMenu {isOpen} />
		</button>
	</div>
</header>
<Navigation {isOpen} />
