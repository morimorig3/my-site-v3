<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="custom-container flex-1">
		<slot />
	</main>
	<Footer />
</div>
