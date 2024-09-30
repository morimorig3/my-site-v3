<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import MainLayout from '$lib/component/MainLayout.svelte';
	import '../app.css';

	// View Transition
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
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
