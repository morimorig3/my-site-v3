<script lang="ts">
	import { slide } from 'svelte/transition';

	type PositionType = 'left' | 'top' | 'right' | 'bottom';

	export let title = '';
	export let description = '';
	export let arrowPosition: PositionType = 'left';
	let isOpen = false;

	function handleClick() {
		isOpen = !isOpen;
	}

	$: arrowClass = arrowPosition;
</script>

<div class="wrap">
	<div class={`bubble ${arrowClass}`} data-is-open={isOpen}>
		<button
			class="inline-flex flex-col w-full p-4 text-left relative hover:bg-sky-50 dark:hover:bg-divider rounded-xl transition-colors"
			on:click|preventDefault={handleClick}
		>
			{#if title}
				<span class="text-label font-bold dark:text-black">{title}</span>
			{/if}
			{#if description}
				<span class="text-label-sm text-placeholder dark:text-body dark:text-label-sm"
					>{description}</span
				>
			{/if}
			{#if isOpen}
				<span class="close" />
			{/if}
		</button>
		{#if isOpen}
			<div class="px-4 pb-4" transition:slide>
				<slot name="content" />
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.close {
		width: 20px;
		height: 20px;
		position: absolute;
		top: theme(space.4);
		right: theme(space.4);
	}
	.close::before,
	.close::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 2px;
		height: 100%;
		border-radius: 100vh;
		background-color: theme(colors.placeholder);
		@apply dark:bg-body;
	}
	.close::before {
		transform: translate(-50%, -50%) rotate(45deg);
	}

	.close::after {
		transform: translate(-50%, -50%) rotate(-45deg);
	}
	.wrap {
		position: relative;
		margin-bottom: 1em;
	}
	.bubble {
		position: relative;
		border-radius: 10px;
		background-color: #fff;
		filter: drop-shadow(rgba(0, 0, 0, 0.16) 0px 1px 2px);
		@apply dark:bg-lightBody;
	}
	.bubble::before {
		content: '';
		display: block;
		position: absolute;
		background-color: #fff;
		height: calc(20px / 2 * tan(60deg));
		width: 20px;
		@apply dark:bg-lightBody;
	}
	.bubble[data-is-open='true']:hover::before {
		background-color: #fff;
		@apply dark:bg-lightBody;
	}
	.left.bubble::before {
		top: 50%;
		right: 100%;
		transform: translateY(-50%);
		clip-path: polygon(0 50%, 100% 0, 100% 100%);
	}
	.top.bubble::before {
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	}
	.right.bubble::before {
		top: 50%;
		left: 100%;
		transform: translateY(-50%);
		clip-path: polygon(0% 0%, 0% 100%, 100% 50%);
	}
	.bottom.bubble::before {
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		clip-path: polygon(0% 0%, 100% 0, 50% 100%);
		@apply transition-colors;
	}
	.bubble:hover::before {
		background-color: theme(colors.sky.50);
		transition: theme(transitionDuration.150);
		@apply dark:bg-divider;
	}
</style>
