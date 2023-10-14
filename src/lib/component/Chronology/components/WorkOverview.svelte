<script lang="ts">
	import type { WorkOverview } from '$lib/server/about/types';

	import RenderIcon from '$lib/component/RenderIcon.svelte';
	import { formatTerm } from '$lib/functions/formatTerm';

	export let workOverview: WorkOverview;
	$: ({ title, term, stacks, description } = workOverview);
</script>

<div class="flex flex-col gap-y-2">
	<div>
		<p class="text-label font-bold">{title}</p>
		{#if term}
			<p class="text-label-sm text-placeholder">{formatTerm(term)}</p>
		{/if}
		{#if stacks}
			<ul class="flex gap-x-2 py-1">
				{#each stacks as { label, iconName }}
					<li data-tooltip={label}>
						<RenderIcon {iconName} className="h-5" />
					</li>
				{/each}
			</ul>
		{/if}
	</div>
	{#if description}
		<p class="text-body-sm">{description}</p>
	{/if}
</div>
