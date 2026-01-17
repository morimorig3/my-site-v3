<script lang="ts">
	import type { Term } from '$lib/server/types';

	import { formatTerm } from '$lib/functions/formatTerm';

	export let href = '';
	export let src = '';
	export let title = '';
	export let term: Term;
	$: bgImage = `url(${src})`;
</script>

<a {href} class="card">
	<div class="card__inner">
		<p class="text-subtitle">{title}</p>
		<p class="text-label-sm">{formatTerm(term)}</p>
		<span class="card__plus"></span>
	</div>
	<span class="card__bg u-layered-bg z-0" style:--bg-image={bgImage}></span>
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
		&:hover {
			.card__bg {
				@apply scale-105;
			}
		}
	}
	:global(.dark) .card {
		@apply text-lightWhite;
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
	.card__inner {
		@apply z-10 w-full h-full relative;
	}
	.card__bg {
		@apply absolute top-0 right-0 bottom-0 left-0 transition-transform;
	}
</style>
