<script lang="ts">
	import CustomButton from '$lib/component/CustomButton/CustomButton.svelte';
	export let text = '';
	export let label = '';
	export let handleClickButton: () => void;
</script>

<div class="wrapper">
	<p class="text-label dark:text-lightBody">{text}</p>
	<div class="flex gap-x-8">
		<CustomButton {label} handleClick={handleClickButton} />
	</div>
</div>

<style lang="postcss">
	.wrapper {
		background-color: #fff;
		z-index: 101;
		@apply flex flex-col gap-y-6 shadow-2xl p-6 tablet:px-8 laptop:px-10;
		@media (min-width: theme(screens.tablet)) {
			width: 375px;
			max-height: 588px;
			border-radius: theme(borderRadius.2xl);
		}
		@media (min-width: theme(screens.desktop)) {
			width: 640px;
		}
	}
	:global(.dark) .wrapper {
		@apply bg-lightSecondary;
	}
</style>
