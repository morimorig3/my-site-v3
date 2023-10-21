<script>
	import { theme } from '../../store';

	import FaMoon from './Icons/FaMoon.svelte';
	import FaSun from './Icons/FaSun.svelte';

	import { THEME } from '$lib/const';
</script>

<button on:click={theme.toggle} class="theme-switch">
	<span aria-hidden={$theme === THEME.DARK} class="theme-switch__icon-wrapper">
		<FaMoon className="w-full h-full fill-body dark:fill-lightWhite dark:hover:fill-lightBody" />
	</span>
	<span aria-hidden={$theme !== THEME.DARK} class="theme-switch__icon-wrapper">
		<FaSun className="w-full h-full fill-body dark:fill-lightWhite dark:hover:fill-lightBody" />
	</span>
</button>

<style lang="postcss">
	.theme-switch {
		@apply relative block rounded-full overflow-hidden w-7 h-7 laptop:w-6 laptop:h-6;
		&__icon-wrapper {
			@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity;
		}
	}
	.theme-switch__icon-wrapper[aria-hidden='false'] {
		opacity: 0;
		user-select: none;
	}
</style>
