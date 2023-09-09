<script>
	import { slide } from 'svelte/transition';

	export let title = '';
	export let description = '';
	let isOpen = false;

	function handleClick() {
		isOpen = !isOpen;
	}
</script>

<div class="wrap">
	<div class="dot" />
	<div class="bubble" data-is-open={isOpen}>
		<button
			class="inline-flex flex-col w-full p-4 text-left relative hover:bg-sky-50 transition-colors"
			on:click|preventDefault={handleClick}
		>
			{#if title}
				<span class="text-label font-bold">{title}</span>
			{/if}
			{#if description}
				<span class="text-label-sm text-placeholder">{description}</span>
			{/if}
			{#if isOpen}
				<div class="close" />
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
	.dot {
		width: 24px;
		height: 24px;
		background-color: theme(colors.divider);
		border-radius: 9999px;
		position: absolute;
		top: 50%;
		z-index: 10;
		transform: translateY(-50%) translateX(-50%);
		border: 4px solid #fff;
		@media (min-width: theme(screens.tablet)) {
			margin-left: theme(space.5);
		}
	}
	.bubble {
		position: relative;
		width: 90%;
		margin-left: auto;
		border-radius: 10px;
		background-color: #fff;
		filter: drop-shadow(rgba(0, 0, 0, 0.16) 0px 1px 2px);
	}
	.bubble::before {
		content: '';
		display: block;
		height: calc(20px / 2 * tan(60deg));
		width: 14px;
		clip-path: polygon(0 50%, 100% 0, 100% 100%);
		position: absolute;
		top: 50%;
		right: 100%;
		transform: translateY(-50%);
		background-color: #fff;
	}
	.bubble:hover::before {
		background-color: theme(colors.sky.50);
		transition: theme(transitionDuration.150);
	}
	.bubble[data-is-open='true']:hover::before {
		background-color: #fff;
	}
</style>
