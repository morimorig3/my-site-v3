<script lang="ts">
	import { isDeskTop } from '../../../store';

	import Section from './components/Section.svelte';

	import CardList from '$lib/component/CardList/CardList.svelte';
	import CardIcon from '$lib/component/CardList/components/CardIcon.svelte';
	import CardItem from '$lib/component/CardList/components/CardItem.svelte';
	import TabButton from '$lib/component/TabButton.svelte';
	import { formatTerm } from '$lib/functions/formatTerm';

	export let data;
	$: ({ title, term, overview, image, stacks, features, descriptions } = data);
	$: bgImage = `url(${image})`;
	let activeTabIndex = 0;
	function setActiveTabIndex(index: number) {
		activeTabIndex = index;
	}
</script>

<div class="l-container py-6 tablet:py-8 laptop:py-10">
	<div
		class="u-negative-container hero u-layered-bg mb-6 flex flex-col items-center justify-center shadow"
		style:--bg-image={bgImage}
	>
		<h1 class="text-subtitle text-white">{title}</h1>
		<p class="text-label-sm text-white">{formatTerm(term)}</p>
	</div>
	<div class="flex flex-col gap-y-6">
		<Section label="Overview">
			<p class="text-body">{overview}</p>
		</Section>
		<Section label="Stacks">
			<CardList>
				{#each stacks as { iconName, label }}
					<CardItem>
						<CardIcon {iconName} className="h-8" />
						<p class="text-label font-bold">{label}</p>
					</CardItem>
				{/each}
			</CardList>
		</Section>
		<Section label="Features">
			<CardList>
				{#each features as { iconName, title, label }}
					<CardItem>
						<CardIcon {iconName} className="h-6" />
						<p class="text-label-sm text-placeholder">{title}</p>
						<p class="text-label font-bold">{label}</p>
					</CardItem>
				{/each}
			</CardList>
		</Section>
		{#if $isDeskTop}
			{#each descriptions as { body, label }}
				<Section {label}>
					{#each body as paragraph}
						<p class="text-body">{paragraph}</p>
					{/each}
				</Section>
			{/each}
		{:else}
			<section>
				<div
					role="tablist"
					class="w-full grid auto-cols-fr grid-flow-col rounded-lg border shadow bg-white mb-4"
				>
					{#each descriptions as { label }, index}
						<TabButton
							handleClick={() => setActiveTabIndex(index)}
							{label}
							isActive={activeTabIndex === index}
						/>
					{/each}
				</div>
				<div>
					{#each descriptions as { body }, index}
						{#if activeTabIndex === index}
							{#each body as paragraph}
								<p class="text-body">{paragraph}</p>
							{/each}
						{/if}
					{/each}
				</div>
			</section>
		{/if}
	</div>
</div>

<style lang="postcss">
	.hero {
		height: 56vw;
		max-height: 293px;
	}
</style>
