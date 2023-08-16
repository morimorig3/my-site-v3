<script lang="ts">
	import Navigation from './Navigation.svelte';

	let isOpen = false;
	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<header class="fixed w-full">
	<div class="custom-container relative z-50">
		<p>ロゴ</p>
		<button on:click={toggleMenu}>ハンバーガーボタン</button>
	</div>
	<Navigation {isOpen} />
</header>
