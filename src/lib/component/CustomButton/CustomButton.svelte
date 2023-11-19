<script lang="ts">
	import { BUTTON_COLOR_CLASSES } from './const';

	import type { ButtonColorType } from './types';
	import type { MouseEventHandler } from 'svelte/elements';

	export let handleClick: MouseEventHandler<HTMLButtonElement>;
	export let label = '';
	export let buttonColorType: ButtonColorType = 'white';
	const colorClasses = BUTTON_COLOR_CLASSES[buttonColorType];
</script>

<button
	on:click={handleClick}
	class={`w-full text-label font-bold border shadow rounded-md h-12 relative dark:border-0 ${colorClasses}`}
	>{label}
	<slot />
</button>
