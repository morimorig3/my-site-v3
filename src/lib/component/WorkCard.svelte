<script lang="ts">
	export let href = '';
	export let src = '';
	export let title = '';
	export let term = '';
	$: bgImage = `url(${src})`;
</script>

<a {href} class="card u-layered-bg" style:--bg-image={bgImage}>
	<p class="text-subtitle">{title}</p>
	<p class="text-label-sm">{term}</p>
	<span class="card__plus" />
</a>

<style lang="postcss">
	.card {
		height: 65.3vw;
		@media (min-width: theme(screens.tablet)) {
			height: 30.5vw;
		}
		@media (min-width: theme(screens.laptop)) {
			height: 200px;
		}
		@apply relative p-6 text-white block shadow rounded-lg overflow-hidden;
	}
	.card__plus {
		@apply w-10 h-10 block absolute right-6 bottom-6;
		&:after,
		&:before {
			display: block;
			content: '';
			width: 100%;
			height: 2px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			@apply bg-white transition-transform;
		}
		&:after {
			transform: translate(-50%, -50%) rotate(90deg);
		}
	}
</style>
