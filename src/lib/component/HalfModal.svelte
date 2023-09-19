<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import { focusTrap } from 'svelte-focus-trap';

	import { clickOutside } from '$lib/modules/clickOutside';
	export let isOpen = false;
	export let onClickCloseButton: () => void;
	export let ariaLabelledby: string;
	export let ariaDescribedby: string;

	function hideModal() {
		isOpen = false;
	}
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

<svelte:window
	on:keydown={(event) => {
		if (event.key === 'Escape') hideModal();
	}}
/>

{#if isOpen}
	<div
		use:focusTrap
		role="dialog"
		aria-modal="true"
		aria-labelledby={ariaLabelledby}
		aria-describedby={ariaDescribedby}
		class="grid place-items-center fixed top-0 right-0 bottom-0 left-0 z-50"
	>
		<div use:clickOutside on:clickOutside={hideModal} transition:slide class="wrapper">
			<button on:click={onClickCloseButton} class="close">
				<span />
				<span />
				<span />
			</button>
			<div class="inner">
				<slot />
			</div>
		</div>
		<div transition:fade={{ duration: 100 }} class="overlay" />
	</div>
{/if}

<style lang="postcss">
	.overlay {
		@apply fixed top-0 right-0 bottom-0 left-0;
		background-color: rgba(0, 0, 0, 0.25);
		z-index: 100;
	}
	.wrapper {
		background-color: #fff;
		height: calc(100vh * 0.83);
		z-index: 101;
		border-top-left-radius: theme(borderRadius.2xl);
		border-top-right-radius: theme(borderRadius.2xl);
		@apply fixed right-0 bottom-0 left-0 shadow-2xl pt-14 px-6 tablet:px-8 laptop:px-10;
		@media (min-width: theme(screens.tablet)) {
			position: relative;
			width: 375px;
			height: calc(100vh * 0.83);
			max-height: 588px;
			border-radius: theme(borderRadius.2xl);
		}
		@media (min-width: theme(screens.desktop)) {
			width: 640px;
		}
	}
	.inner {
		@apply py-6;
		overflow-y: scroll;
		width: 100%;
		max-height: 100%;
	}
	.close {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		width: 40px;
		height: 40px;
		padding: 12px 4px;
		@apply top-6 left-6 absolute;
	}
	.close span {
		display: block;
		height: 2px;
		width: 100%;
		border-radius: 9999px;
		background-color: theme(colors.body);
		transform-origin: right;
		transition: transform 0.25s, opacity 0.25s;
		&:nth-child(1) {
			transform: rotate(-45deg) translateY(-6px);
		}
		&:nth-child(2) {
			transform: translateX(-5px);
			opacity: 0;
		}
		&:nth-child(3) {
			transform: rotate(45deg) translateY(6px);
		}
	}
</style>
