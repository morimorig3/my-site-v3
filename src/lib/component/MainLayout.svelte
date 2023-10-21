<script lang="ts">
	import { onMount } from 'svelte';

	import { isDeskTop } from '../../store';

	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	let screenSize: number;
	onMount(() => {
		isDeskTop.set(screenSize);
	});
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="flex flex-col min-h-screen pt-16 tablet:pt-20 dark:bg-lightPrimary">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
	<Footer />
</div>
