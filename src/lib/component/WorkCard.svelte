<script lang="ts">
	export let href = '';
	export let src = '';
	export let title = '';
	export let term = '';
	$: bgImage = `url(${src})`;
</script>

<a {href} class="card card--layered" style:--bg-image={bgImage}>
	<p class="text-subtitle">{title}</p>
	<p class="text-label-sm">{term}</p>
	<span class="card__plus" />
</a>

<style lang="postcss">
	.card {
		min-height: 245px;
		@apply relative p-6 text-white block shadow rounded-lg overflow-hidden;
	}
	.card--layered {
		background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), var(--bg-image);
		@apply bg-cover bg-center bg-no-repeat;
	}
	.card__plus {
		@apply w-10 h-10 block absolute right-6 top-6;
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
	.plus.isOpen {
		&:after {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		&:before {
			transform: translate(-50%, -50%) rotate(180deg);
		}
	}
</style>
