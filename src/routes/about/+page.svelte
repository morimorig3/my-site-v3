<script>
	import Chronology from '$lib/component/Chronology/Chronology.svelte';
	import BubbleContent from '$lib/component/Chronology/components/BubbleContent.svelte';
	import SpeechBubble from '$lib/component/Chronology/components/SpeechBubble.svelte';
	import WorkOverview from '$lib/component/Chronology/components/WorkOverview.svelte';
	import Divider from '$lib/component/Divider.svelte';
	export let data;
	$: ({ history } = data);
</script>

<div class="l-container py-6 tablet:py-8 laptop:py-10">
	<Chronology historyList={history}>
		{#each history as { title, description, workOverviews }}
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
		{/each}
	</Chronology>
</div>
