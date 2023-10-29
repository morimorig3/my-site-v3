<script lang="ts">
	import { isDeskTop } from '../../../store';

	import Section from './components/Section.svelte';

	import { page } from '$app/stores';
	import CardList from '$lib/component/CardList/CardList.svelte';
	import CardItem from '$lib/component/CardList/components/CardItem.svelte';
	import Head from '$lib/component/Head.svelte';
	import RenderIcon from '$lib/component/RenderIcon.svelte';
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

<Head
	pageTitle={`Works - ${title}`}
	description={`${title}として働いていた際の環境、使用していた技術スタック、おおまかな業務内容について紹介しています。}`}
	pathName={$page.url.pathname}
/>

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
			<p class="text-body dark:text-lightBody">{overview}</p>
		</Section>
		<Section label="Stacks">
			<CardList>
				{#each stacks as { iconName, label }}
					<CardItem>
						<RenderIcon {iconName} className="h-8" />
						<p class="text-label font-bold dark:text-lightWhite">{label}</p>
					</CardItem>
				{/each}
			</CardList>
		</Section>
		<Section label="Features">
			<CardList>
				{#each features as { iconName, title, label }}
					<CardItem>
						<RenderIcon {iconName} className="h-6 dark:fill-lightWhite" />
						<p class="text-label-sm text-placeholder dark:text-lightBody">{title}</p>
						<p class="text-label font-bold dark:text-lightWhite">{label}</p>
					</CardItem>
				{/each}
			</CardList>
		</Section>
		{#if $isDeskTop}
			{#each descriptions as { label, markdown }}
				<Section {label}>
					<!-- eslint-disable-next-line -->
					<article class="u-markdown text-body dark:text-lightBody">{@html markdown}</article>
				</Section>
			{/each}
		{:else}
			<section>
				<div
					role="tablist"
					class="w-full grid auto-cols-fr grid-flow-col rounded-lg border overflow-hidden shadow bg-white mb-4 dark:bg-lightBody dark:border-black"
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
					{#each descriptions as { markdown }, index}
						{#if activeTabIndex === index}
							<!-- eslint-disable-next-line -->
							<article class="u-markdown text-body dark:text-lightBody">{@html markdown}</article>
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
