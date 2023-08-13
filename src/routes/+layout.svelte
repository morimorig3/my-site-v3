<script>
	import MainLayout from '$lib/component/MainLayout.svelte';
	import '../app.css';
</script>

<MainLayout>
	<slot />
</MainLayout>

<style lang="postcss">
	:global(html) {
		color: theme(colors.textBody);
		line-height: 1.15;
	}
</style>
