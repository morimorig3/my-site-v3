<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<div class="flex flex-col min-h-screen pt-16 tablet:pt-20">
	<Header />
	<main class="custom-container flex-1">
		<slot />
	</main>
	<Footer />
</div>
