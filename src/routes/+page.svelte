<script>
	import Bio from '$lib/component/BIO.svelte';
	import BookListLarge from '$lib/component/BookListLarge/BookListLarge.svelte';
	import BubbleContent from '$lib/component/Chronology/components/BubbleContent.svelte';
	import SpeechBubble from '$lib/component/Chronology/components/SpeechBubble.svelte';
	import WorkOverview from '$lib/component/Chronology/components/WorkOverview.svelte';
	import DevelopCardList from '$lib/component/DevelopCardList/DevelopCardList.svelte';
	import DevelopCard from '$lib/component/DevelopCardList/components/DevelopCard.svelte';
	import Divider from '$lib/component/Divider.svelte';
	import Head from '$lib/component/Head.svelte';
	import WorkCardList from '$lib/component/WorkCardList/WorkCardList.svelte';
	import WorkCard from '$lib/component/WorkCardList/components/WorkCard.svelte';

	export let data;
	$: ({ developData, workData, bookData, historyData } = data);
</script>

<Head
	description="morimorig3 のポートフォリオサイトでは、私の制作物一覧やこれまでのエンジニアとしての経験、大切にしている本のリスト、そして自分自身の経歴を紹介しています。このサイトはSvelteKitを用いて制作しています。"
/>

<div class="flex flex-col">
	<section class="border-b dark:border-b-lightSecondary">
		<div class="l-container py-6 tablet:py-8 laptop:py-10 flex flex-col gap-y-6">
			<div class="text-center">
				<h2 class="section-title">Develop</h2>
				<p class="section-description">学習用に制作したモノ</p>
			</div>
			<DevelopCardList>
				{#each developData as item, index}
					{#if index < 3}
						<li>
							<DevelopCard {item} disableSort={true} />
						</li>
					{/if}
				{/each}
			</DevelopCardList>
			<a href="/develop" class="text-link self-end">もっと見る</a>
		</div>
	</section>
	<section class="border-b bg-bgTertiary dark:bg-lightSecondary dark:border-b-lightSecondary">
		<div class="l-container py-6 tablet:py-8 laptop:py-10 flex flex-col gap-y-6">
			<div class="text-center">
				<h2 class="section-title">Works</h2>
				<p class="section-description">過去から現在までのお仕事について</p>
			</div>
			<WorkCardList>
				{#each workData as { slug, title, term, image }, index}
					{#if index < 2}
						<li>
							<WorkCard href={`/works/${slug}`} {title} {term} src={image} />
						</li>
					{/if}
				{/each}
			</WorkCardList>
			<a href="/works" class="text-link self-end">もっと見る</a>
		</div>
	</section>
	<section class="border-b dark:border-b-lightSecondary">
		<div class="l-container py-6 tablet:py-8 laptop:py-10 flex flex-col gap-y-6">
			<div class="text-center">
				<h2 class="section-title">Books</h2>
				<p class="section-description">お気に入りの本たち</p>
			</div>
			<BookListLarge bookItems={bookData.bookList} />
			<a href="/books" class="text-link self-end">もっと見る</a>
		</div>
	</section>
	<section class="bg-bgTertiary dark:bg-lightSecondary">
		<div class="l-container py-6 tablet:py-8 laptop:py-10 flex flex-col gap-y-6">
			<div class="text-center">
				<h2 class="section-title">About</h2>
				<p class="section-description">経歴っぽいモノ</p>
			</div>
			<SpeechBubble
				arrowPosition="bottom"
				title={historyData.title}
				description={historyData.description}
			>
				<BubbleContent slot="content">
					{#each historyData.workOverviews as workOverview, index}
						<WorkOverview {workOverview} />
						{#if index < historyData.workOverviews.length - 1}
							<Divider />
						{/if}
					{/each}
				</BubbleContent>
			</SpeechBubble>
			<a href="/about" class="text-link self-end">もっと見る</a>
			<Bio />
		</div>
	</section>
</div>

<style lang="postcss">
	.section-title {
		@apply text-subtitle;
	}
	:global(.dark) .section-title {
		@apply text-lightWhite;
	}
	.section-description {
		@apply text-label text-placeholder;
	}
	:global(.dark) .section-description {
		@apply text-lightBody;
	}
</style>
