<script>
	import DevelopCardList from '$lib/component/DevelopCardList/DevelopCardList.svelte';
	import DevelopCard from '$lib/component/DevelopCardList/components/DevelopCard.svelte';

	export let data;
	$: ({ developData } = data);
</script>

<div class="flex flex-col">
	<section class="border-b">
		<div class="l-container py-6 tablet:py-8 laptop:py-10 flex flex-col gap-y-6">
			<div class="text-center">
				<h2 class="text-subtitle">Develop</h2>
				<p class="text-label text-placeholder">学習用に制作したモノ</p>
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
	<section class="border-b bg-bgTertiary">
		<div class="l-container py-6 tablet:py-8 laptop:py-10 flex flex-col gap-y-6">
			<div class="text-center">
				<h2 class="text-subtitle">Works</h2>
				<p class="text-label text-placeholder">過去から現在までのお仕事について</p>
			</div>
			<a href="/works" class="text-link self-end">もっと見る</a>
		</div>
	</section>
	<section class="border-b">
		<div class="l-container py-6 tablet:py-8 laptop:py-10 flex flex-col gap-y-6">
			<div class="text-center">
				<h2 class="text-subtitle">Books</h2>
				<p class="text-label text-placeholder">お気に入りの本たち</p>
			</div>
			<a href="/books" class="text-link self-end">もっと見る</a>
		</div>
	</section>
	<section>
		<div class="l-container py-6 tablet:py-8 laptop:py-10 flex flex-col gap-y-6">
			<div class="text-center">
				<h2 class="text-subtitle">About</h2>
				<p class="text-label text-placeholder">経歴っぽいモノ</p>
			</div>
			<a href="/about" class="text-link self-end">もっと見る</a>
		</div>
	</section>
</div>
