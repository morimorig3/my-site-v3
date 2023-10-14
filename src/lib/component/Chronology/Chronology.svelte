<script lang="ts">
	import Divider from '../Divider.svelte';

	import BubbleContent from './components/BubbleContent.svelte';
	import SpeechBubble from './components/SpeechBubble.svelte';
	import WorkOverview from './components/WorkOverview.svelte';

	import type { LoadHistoryResponse } from '$lib/server/about/types';

	export let historyList: LoadHistoryResponse;
	const START_YEAR = 2015;
	const CURRENT_YEAR = new Date().getFullYear();
	$: years = Array.from(
		{ length: CURRENT_YEAR - START_YEAR + 1 },
		(_, i) => START_YEAR + i
	).reverse();
</script>

<div class="wrap">
	<div class="year font-bold mb-6">NOW</div>
	{#each years as year}
		<div class="year font-bold">{year}</div>
		{#each historyList as { title, term, description, workOverviews }}
			{#if Number(term.from.split('-').shift()) === year - 1}
				<div class="dot">
					<div>
						<SpeechBubble {title} {description}>
							<BubbleContent slot="content">
								{#each workOverviews as workOverview, index}
									<WorkOverview {workOverview} />
									{#if index < workOverviews.length - 1}
										<Divider />
									{/if}
								{/each}
							</BubbleContent>
						</SpeechBubble>
					</div>
				</div>
			{/if}
		{/each}
	{/each}
</div>

<style lang="postcss">
	.year {
		position: relative;
		width: fit-content;
		transform: translateX(-50%);
		color: theme(colors.placeholder);
		background-color: #fff;
		z-index: 1;
		@media (min-width: theme(screens.tablet)) {
			transform: translateX(0);
		}
	}
	.dot {
		position: relative;
		&::after {
			content: '';
			display: block;
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
	}
	.dot > * {
		width: 90%;
		margin-left: auto;
	}
	.wrap {
		width: 100%;
		position: relative;
	}
	.wrap::after {
		content: '';
		display: block;
		width: 2px;
		height: 100%;
		background-color: theme(colors.divider);
		position: absolute;
		top: 0;
		left: 0;
		@media (min-width: theme(screens.tablet)) {
			margin-left: theme(space.5);
		}
	}
</style>
