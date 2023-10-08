<script lang="ts">
	import CardList from '$lib/component/CardList/CardList.svelte';
	import CardItem from '$lib/component/CardList/components/CardItem.svelte';
	import FaBuildings from '$lib/component/Icons/FaBuildings.svelte';
	import FaCode from '$lib/component/Icons/FaCode.svelte';
	import FaDev from '$lib/component/Icons/FaDev.svelte';
	import FaLocationDot from '$lib/component/Icons/FaLocationDot.svelte';
	import FaPeopleGroup from '$lib/component/Icons/FaPeopleGroup.svelte';
	import SiAdobeIllustrator from '$lib/component/Icons/SiAdobeIllustrator.svelte';
	import SiCss3 from '$lib/component/Icons/SiCss3.svelte';
	import SiHtml5 from '$lib/component/Icons/SiHtml5.svelte';
	import TabButton from '$lib/component/TabButton.svelte';

	const TAB_LIST = ['PR', '概要'];

	const src = '/works_web-engineer_01.jpg';
	$: bgImage = `url(${src})`;
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
		<h1 class="text-subtitle text-white">コーダー</h1>
		<p class="text-label-sm text-white">Jan. 2019 ~ Sep. 2019</p>
	</div>
	<div class="flex flex-col gap-y-6">
		<section>
			<h2 class="text-subtitle mb-4">Stacks</h2>
			<CardList>
				<CardItem>
					<SiHtml5 className="h-8" />
					<p class="text-label font-bold">HTML</p>
				</CardItem>
				<CardItem>
					<SiCss3 className="h-8" />
					<p class="text-label font-bold">CSS</p>
				</CardItem>
				<CardItem>
					<SiAdobeIllustrator className="h-8" />
					<p class="text-label font-bold">Illustrator</p>
				</CardItem>
			</CardList>
		</section>
		<section>
			<h2 class="text-subtitle mb-4">Features</h2>
			<CardList>
				<CardItem>
					<FaLocationDot className="h-6" />
					<p class="text-label-sm text-placeholder">勤務地</p>
					<p class="text-label font-bold">大阪</p>
				</CardItem>
				<CardItem>
					<FaBuildings className="h-6" />
					<p class="text-label-sm text-placeholder">勤務形態</p>
					<p class="text-label font-bold">オフィス</p>
				</CardItem>
				<CardItem>
					<FaDev className="h-6" />
					<p class="text-label-sm text-placeholder">開発体制</p>
					<p class="text-label font-bold text-center">ウォーター<br />フォール</p>
				</CardItem>
				<CardItem>
					<FaPeopleGroup className="h-6" />
					<p class="text-label-sm text-placeholder">チーム</p>
					<p class="text-label font-bold">1人</p>
				</CardItem>
				<CardItem>
					<FaCode className="h-6" />
					<p class="text-label-sm text-placeholder">主要スキル</p>
					<p class="text-label font-bold">CSS</p>
				</CardItem>
			</CardList>
		</section>
		<section>
			<div
				role="tablist"
				class="w-full grid auto-cols-fr grid-flow-col rounded-lg border shadow bg-white"
			>
				{#each TAB_LIST as tab, index}
					<TabButton
						handleClick={() => setActiveTabIndex(index)}
						label={tab}
						isActive={activeTabIndex === index}
					/>
				{/each}
			</div>
			{#each TAB_LIST as tab, index}
				{#if activeTabIndex === index}
					<p>{tab}</p>
				{/if}
			{/each}
		</section>
	</div>
	<p>技術スタック</p>
	<ul>
		<li>必要か？</li>
	</ul>

	<p>アイコンで表現</p>
	<ul>
		<li>開発体制</li>
		<li>開発手法</li>
		<li>主要スキル</li>
		<li>勤務地</li>
	</ul>

	<p>文章で表現</p>
	<ul>
		<li>概要</li>
		<li>PR</li>
	</ul>

	<p class="text-label-sm">Jan. 2019 ~ Sep. 2019（9ヶ月間）</p>
	<h2 class="text-subtitle">なにをしたか</h2>
	<p class="text-body-sm">
		バナー制作やコンテンツ追加・差し替えなどのWebサイト運用業務に携わりました
	</p>
	<h2 class="text-subtitle">どうやるのか</h2>
	<h3 class="font-bold">開発体制</h3>
	<p class="text-body-sm">6〜7人で構成される運用チーム</p>
	<h3 class="font-bold">スキル</h3>
	<ul class="text-body-sm">
		<li>HTML</li>
		<li>CSS</li>
		<li>IE8サポート</li>
	</ul>
	<h3 class="font-bold">PR</h3>
	<h2 class="text-subtitle">主要クライアント</h2>

	<section>
		<h1 class="text-title">コーダー</h1>
		<p>百貨店・商業施設</p>
		<h2>働き方</h2>
		<h3>チーム</h3>
		<img src="" alt="チームで働くっぽい画像" />
		<p>
			何人制のチームでアサインされた業務を行う。携われるのはデザインFIX後からエンジニアに要件・デザインの共有が行われる。要件確認や実装が主要業務。
		</p>
		<h3>働く場所</h3>
		<img src="" alt="オフィスの画像" />
		<p>職場</p>
		<h3>開発体制</h3>
		<p>クライアント担当者・Webディレクター・デザイナー・エンジニアのそれぞれ1人ずつで</p>
		<h3>技術スタック</h3>
		<p>静的なhtmlとcssがメインでインタラクティブの表現にはjQueryを使用していました。</p>
	</section>
</div>

<style lang="postcss">
	.hero {
		height: 56vw;
		max-height: 293px;
	}
</style>
