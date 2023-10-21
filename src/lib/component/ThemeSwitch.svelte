<script>
	import { theme } from '../../store';

	import FaMoon from './Icons/FaMoon.svelte';
	import FaSun from './Icons/FaSun.svelte';

	import { THEME } from '$lib/const';
</script>

<button on:click={theme.toggle} class="block rounded-full">
	<span class="block w-7 h-7 laptop:w-6 laptop:h-6 p-1 rounded-full relative">
		<span aria-hidden={$theme === THEME.DARK} class="icon">
			<FaMoon className="h-full fill-body dark:fill-lightWhite" />
		</span>
		<span aria-hidden={$theme !== THEME.DARK} class="icon">
			<FaSun className="h-full fill-body dark:fill-lightWhite" />
		</span>
	</span>
</button>

<style lang="postcss">
	.icon {
		@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity;
	}
	.icon[aria-hidden='false'] {
		opacity: 0;
	}
</style>
