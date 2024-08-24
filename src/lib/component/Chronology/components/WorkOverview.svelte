<script lang="ts">
	import type { WorkOverview } from '$lib/server/about/types';

	import FaArrowUpRightFromSquare from '$lib/component/Icons/FaArrowUpRightFromSquare.svelte';
	import RenderIcon from '$lib/component/RenderIcon.svelte';
	import { formatTerm } from '$lib/functions/formatTerm';

	export let workOverview: WorkOverview;
	$: ({ title, url, term, stacks, description } = workOverview);
</script>

<div class="flex flex-col gap-y-2">
	<div>
		<p class="text-label font-bold dark:text-black flex gap-x-2 items-center justify-between">
			{title}
			{#if url}
				<a
					href={url}
					class="text-caption text-lightBody flex gap-x-1 items-center"
					target="_blank"
					rel="noopener noreferrer"
				>
					詳細はこちら
					<span class="u-circle-icon hover:bg-sky-50 dark:bg-lightWhite dark:hover:bg-lightBody">
						<FaArrowUpRightFromSquare className="h-3 fill-body" />
					</span>
				</a>
			{/if}
		</p>
		{#if term}
			<p class="text-label-sm text-placeholder dark:text-body dark:text-label-sm">
				{formatTerm(term)}
			</p>
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
