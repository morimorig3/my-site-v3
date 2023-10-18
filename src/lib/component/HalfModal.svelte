<script lang="ts">
	import { afterUpdate } from 'svelte';

	import { fade, slide } from 'svelte/transition';
	import { focusTrap } from 'svelte-focus-trap';
	import { pan } from 'svelte-gestures';

	export let isOpen: boolean;
	export let handleCloseModal: () => void;
	export let ariaLabelledby: string;
	export let ariaDescribedby: string;

	let modal: HTMLDivElement;
	let panY = 0;
	let modalOffsetTop = 0;
	$: translateY = panY - modalOffsetTop;
	$: threshold = modalOffsetTop + 51;

	// ドラッグ可能範囲
	$: minPanY = modalOffsetTop;
	$: maxPanY = modalOffsetTop + 101;

	afterUpdate(() => {
		// モーダルを閉じた時に値を初期化する
		if (isOpen) return;
		panY = 0;
		modalOffsetTop = 0;
		translateY = 0;
	});

	function handlePan(
		event: CustomEvent<{
			x: number;
			y: number;
			target: HTMLDivElement;
		}>
	) {
		const newPanY = event.detail.y;
		// モーダル表示後にoffsetTopを取得する
		if (!modalOffsetTop) {
			modalOffsetTop = modal.offsetTop;
		}

		// スクロールポジションが指定の範囲外のとき抜ける
		if (newPanY < minPanY || newPanY > maxPanY) return;
		// 値が同じ時は抜ける
		if (panY === newPanY) return;

		panY = newPanY;
	}

	function handlePanUp() {
		if (panY > threshold && panY < maxPanY) {
			handleCloseModal();
		} else {
			translateY = 0;
		}
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

{#if isOpen}
	<div
		use:focusTrap
		role="dialog"
		aria-modal="true"
		aria-labelledby={ariaLabelledby}
		aria-describedby={ariaDescribedby}
		class="fixed top-0 right-0 bottom-0 left-0 z-50"
	>
		<div
			class="w-full h-full grid place-items-center"
			use:pan={{ delay: 100 }}
			on:pan={handlePan}
			on:panup={handlePanUp}
		>
			<div
				bind:this={modal}
				transition:slide
				class="wrapper transition-transform"
				style:transform={`translateY(${translateY}px)`}
			>
				<span class="drag-bar" />
				<button on:click={handleCloseModal} class="close">
					<span />
					<span />
					<span />
				</button>
				<div class="inner">
					<slot />
				</div>
			</div>
		</div>
		<button on:click={handleCloseModal} transition:fade={{ duration: 100 }} class="overlay" />
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
		height: calc(100dvh * 0.83);
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
	.drag-bar {
		width: 150px;
		background-color: theme(colors.placeholder);
		@apply rounded-full block absolute top-3 left-1/2 -translate-x-1/2 h-1 cursor-grab;
	}
</style>
