<script lang="ts">
	import { fade } from 'svelte/transition';
	import { focusTrap } from 'svelte-focus-trap';

	export let handleCloseModal: () => void;
	export let ariaLabelledby = '';
	export let ariaDescribedby = '';
	export let isOpen = false;
</script>

<svelte:head>
	{#if isOpen}
		<style>
			body {
				overflow: clip;
			}
		</style>
	{/if}
</svelte:head>

<div
	use:focusTrap
	role="dialog"
	aria-modal="true"
	aria-labelledby={ariaLabelledby}
	aria-describedby={ariaDescribedby}
	class="half-modal-wrapper"
	transition:fade={{ duration: 100 }}
>
	<slot />
	<button on:click={handleCloseModal} class="u-overlay" />
</div>

<style lang="postcss">
	.half-modal-wrapper {
		@apply fixed top-0 right-0 bottom-0 left-0 z-50 grid place-items-center p-6;
	}
</style>
