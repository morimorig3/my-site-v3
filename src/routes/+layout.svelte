<script lang="ts">
	import MainLayout from '$lib/component/MainLayout.svelte';
	import '../app.css';
</script>

<MainLayout>
	<slot />
</MainLayout>

<style lang="postcss">
	:global(html) {
		font-family: 'Noto Sans JP', -apple-system, blinkmacsystemfont, 'Segoe UI',
			'Hiragino Kaku Gothic ProN', 'BIZ UDPGothic', meiryo, sans-serif;
		color: theme(colors.body);
		line-height: 1.15;
	}
	:global(a) {
		color: theme(colors.link);
	}
</style>
