<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	import CustomButton from '$lib/component/CustomButton/CustomButton.svelte';

	export let handleSubmit: MouseEventHandler<HTMLButtonElement>;
	export let handleClickCancel: MouseEventHandler<HTMLButtonElement>;
</script>

<div class="wrapper">
	<p class="text-label dark:text-lightBody">こちらの内容で送信してよろしいでしょうか？</p>
	<slot />
	<div class="flex gap-x-8">
		<CustomButton buttonColorType="green" label="送信する" handleClick={handleSubmit} />
		<CustomButton label="閉じる" handleClick={handleClickCancel} />
	</div>
</div>

<style lang="postcss">
	.wrapper {
		background-color: #fff;
		z-index: 101;
		max-height: calc(100dvh * 0.83);
		@apply flex flex-col gap-y-6 shadow-2xl p-6 tablet:px-8 laptop:px-10 rounded-lg overflow-scroll;
		@media (min-width: theme(screens.tablet)) {
			width: 375px;
			max-height: 588px;
			@apply rounded-2xl;
		}
		@media (min-width: theme(screens.desktop)) {
			width: 640px;
		}
	}
	:global(.dark) .wrapper {
		@apply bg-lightSecondary;
	}
</style>
