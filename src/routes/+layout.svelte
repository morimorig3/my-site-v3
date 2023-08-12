<script>
	import Footer from '$lib/component/Footer.svelte';
	import Header from '$lib/component/Header.svelte';
	import Navigation from '$lib/component/Navigation.svelte';
	import '../app.css';
</script>

<Header />
<Navigation />
<main>
	<slot />
</main>
<Footer />

<style lang="postcss">
	:global(html) {
		color: theme(colors.textBody);
	}
</style>
