<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Navigation from './Navigation.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Header />
	<Navigation />
	<main class="custom-container flex-1">
		<slot />
	</main>
	<Footer />
</div>
