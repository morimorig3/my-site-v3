<script lang="ts">
	export let isOpen = false;
</script>

<div class="wrap" class:isOpen>
	<span class="bar"></span>
	<span class="bar"></span>
	<span class="bar"></span>
</div>

<style lang="postcss">
	.wrap {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		width: 40px;
		height: 40px;
		padding: 12px 4px;
	}
	.bar {
		display: block;
		height: 2px;
		width: 100%;
		border-radius: 9999px;
		background-color: theme(colors.body);
		transform-origin: right;
		transition:
			transform 0.25s,
			opacity 0.25s;
		&:nth-child(1) {
			transform: scaleX(0.9);
		}
		&:nth-child(2) {
			transform: scaleX(0.8);
		}
		&:nth-child(3) {
			transform: scaleX(0.6);
		}
	}
	:global(.dark) .bar {
		@apply bg-lightWhite;
	}
	.wrap:hover .bar {
		transform: scaleX(1);
	}
	.wrap.isOpen .bar {
		&:nth-child(1) {
			transform: scaleX(1) rotate(-45deg) translateY(-6px);
		}
		&:nth-child(2) {
			transform: translateX(-5px) scaleX(1);
			opacity: 0;
		}
		&:nth-child(3) {
			transform: scaleX(1) rotate(45deg) translateY(6px);
		}
	}
</style>
