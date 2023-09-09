<script>
	import Divider from '../Divider.svelte';
	import FaCar from '../Icons/FaCar.svelte';
	import FaPhone from '../Icons/FaPhone.svelte';
	import FaScrewDriverWrench from '../Icons/FaScrewDriverWrench.svelte';
	import SiAdobeDreamWeaver from '../Icons/SiAdobeDreamWeaver.svelte';
	import SiAdobeIllustrator from '../Icons/SiAdobeIllustrator.svelte';
	import SiAdobePhotoShop from '../Icons/SiAdobePhotoShop.svelte';
	import SiCss3 from '../Icons/SiCss3.svelte';
	import SiGatsby from '../Icons/SiGatsby.svelte';
	import SiGitLab from '../Icons/SiGitLab.svelte';
	import SiGo from '../Icons/SiGo.svelte';
	import SiGulp from '../Icons/SiGulp.svelte';
	import SiHtml5 from '../Icons/SiHtml5.svelte';
	import SiJQuery from '../Icons/SiJQuery.svelte';
	import SiJs from '../Icons/SiJs.svelte';
	import SiNext from '../Icons/SiNext.svelte';
	import SiReact from '../Icons/SiReact.svelte';
	import SiRealm from '../Icons/SiRealm.svelte';
	import SiRedmine from '../Icons/SiRedmine.svelte';
	import SiRedux from '../Icons/SiRedux.svelte';
	import SiSass from '../Icons/SiSass.svelte';
	import SiSvelte from '../Icons/SiSvelte.svelte';
	import SiTs from '../Icons/SiTs.svelte';
	import SiWordPress from '../Icons/SiWordPress.svelte';

	import BubbleContent from './components/BubbleContent.svelte';
	import SpeechBubble from './components/SpeechBubble.svelte';
	import WorkOverview from './components/WorkOverview.svelte';
</script>

<div class="wrap">
	<div class="year font-bold mb-6">NOW</div>
	<div class="year font-bold">2023</div>
	<SpeechBubble title="フロントエンドエンジニア" description="bitA Inc.">
		<BubbleContent slot="content">
			<WorkOverview title="転職サイトアプリ フロント実装" term="Apr. 2022 ~">
				<svelte:fragment slot="icons">
					<li><SiTs className="h-5" /></li>
					<li><SiReact className="h-5" /></li>
					<li><SiRedux className="h-5" /></li>
					<li><SiRealm className="h-5" /></li>
					<li><SiGitLab className="h-5" /></li>
					<li><SiRedmine className="h-5" /></li>
				</svelte:fragment>
				<p class="text-body-sm" slot="description">
					React
					Nativeを用いたスマートフォン向けアプリの開発を、1スプリント1週間のスクラム開発チームで担当し、フロントエンドの新規画面の実装や改修を行いました。
				</p>
			</WorkOverview>
			<Divider />
			<WorkOverview title="個人学習">
				<svelte:fragment slot="icons">
					<li><SiGo className="h-5" /></li>
					<li><SiNext className="h-5" /></li>
					<li><SiGatsby className="h-5" /></li>
					<li><SiSvelte className="h-5" /></li>
				</svelte:fragment>
				<p class="text-body-sm" slot="description">
					Web開発技術を中心に、バックエンドのAPI設計やデータベースの知識を補完するために、GO言語の学習を行いました。
				</p>
			</WorkOverview>
		</BubbleContent>
	</SpeechBubble>
	<div class="year font-bold">2022</div>
	<div class="year font-bold">2021</div>
	<div class="year font-bold">2020</div>
	<SpeechBubble title="Webエンジニア" description="hankyu hanshin marketing solutions Inc.">
		<BubbleContent slot="content">
			<WorkOverview title="Web制作業務" term="Apr. 2020 ~ Mar. 2022">
				<svelte:fragment slot="icons">
					<li><SiJs className="h-5" /></li>
					<li><SiJQuery className="h-5" /></li>
					<li><SiSass className="h-5" /></li>
				</svelte:fragment>
				<div class="text-body-sm" slot="description">
					<ul class="u-list">
						<li>ブランドサイト立ち上げ</li>
						<li>コーポレートサイトのリニューアル</li>
						<li>ランディングページ製作</li>
					</ul>
					<p>
						などを行っていました。<br
						/>ランディングページは毎週のように制作する機会があったため、CSSに自信がつきました。
					</p>
				</div>
			</WorkOverview>
			<Divider />
			<WorkOverview title="デジタルサイネージコンテンツ更新業務" term="Oct. 2019 ~ Mar. 2020">
				<svelte:fragment slot="icons">
					<li><SiHtml5 className="h-5" /></li>
					<li><SiCss3 className="h-5" /></li>
					<li><SiAdobeIllustrator className="h-5" /></li>
				</svelte:fragment>
				<p class="text-body-sm" slot="description">
					Web更新チームの一員として、更新業務を担当しつつ、主にデジタルサイネージのコンテンツ制作を担当していました。
				</p>
			</WorkOverview>
			<Divider />
			<WorkOverview title="Webサイト更新業務" term="Jan. 2019 ~ Sep. 2019">
				<svelte:fragment slot="icons">
					<li><SiHtml5 className="h-5" /></li>
					<li><SiCss3 className="h-5" /></li>
					<li><SiAdobeIllustrator className="h-5" /></li>
				</svelte:fragment>
				<p class="text-body-sm" slot="description">
					商業施設全12支店のWebサイトの隔週更新とバナー制作を担当し、7人構成のチームで連携しながら作業を行っていました。
				</p>
			</WorkOverview>
			<Divider />
			<WorkOverview title="個人学習">
				<svelte:fragment slot="icons">
					<li><SiJs className="h-5" /></li>
					<li><SiReact className="h-5" /></li>
					<li><SiGatsby className="h-5" /></li>
					<li><SiTs className="h-5" /></li>
					<li><SiCss3 className="h-5" /></li>
				</svelte:fragment>
				<div slot="description" class="flex flex-col gap-y-2">
					<p class="text-body-sm">
						業務に必要なHTML・CSS・JavaScriptの基礎知識はもちろん、デザインや設計など発展的な内容まで幅広く学習しました。
					</p>
					<div class="text-body-sm">
						<p class="text-label font-bold">コーディング関連</p>
						<ul class="u-list">
							<li>CSS設計（BEM・SMACSS・FLOCSS）</li>
							<li>セマンティックマークアップ</li>
							<li>オブジェクト指向について</li>
						</ul>
					</div>
					<div class="text-body-sm">
						<p class="text-label font-bold">資格</p>
						<ul class="u-list">
							<li>基本情報技術者</li>
							<li>応用情報技術者</li>
							<li>HTML5プロフェッショナル</li>
						</ul>
					</div>
					<div class="text-body-sm">
						<p class="text-label font-bold">そのほか</p>
						<ul class="u-list">
							<li>React</li>
							<li>TypeScript</li>
							<li>タスクランナー</li>
							<li>色やレイアウトの基礎知識</li>
						</ul>
					</div>
				</div>
			</WorkOverview>
		</BubbleContent>
	</SpeechBubble>
	<div class="year font-bold">2019</div>
	<SpeechBubble title="Webデザイナー専攻" description="デジタルハリウッド大阪本校">
		<BubbleContent slot="content">
			<WorkOverview title="卒業制作" term="Sep. 2019">
				<svelte:fragment slot="icons">
					<li><SiWordPress className="h-5" /></li>
					<li><SiGulp className="h-5" /></li>
					<li><SiJQuery className="h-5" /></li>
					<li><SiSass className="h-5" /></li>
				</svelte:fragment>
				<p class="text-body-sm" slot="description">
					卒業制作ではお世話になっていたヘアサロンのWebサイトを制作させていただきました。
				</p>
			</WorkOverview>
			<Divider />
			<WorkOverview title="Web制作について本格的に学習" term="Mar. 2019 ~ Sep. 2019">
				<svelte:fragment slot="icons">
					<li><SiHtml5 className="h-5" /></li>
					<li><SiCss3 className="h-5" /></li>
					<li><SiAdobeIllustrator className="h-5" /></li>
					<li><SiAdobePhotoShop className="h-5" /></li>
					<li><SiAdobeDreamWeaver className="h-5" /></li>
				</svelte:fragment>
				<p class="text-body-sm" slot="description">
					商業施設全12支店のWebサイトの隔週更新とバナー制作を担当し、7人構成のチームで連携しながら作業を行っていました。
				</p>
			</WorkOverview>
		</BubbleContent>
	</SpeechBubble>
	<SpeechBubble title="Web制作の学習" description="独学期間">
		<BubbleContent slot="content">
			<WorkOverview title="HTML5とCSS3の本（すでに廃盤）" term="Jan. 2019 ~ Mar. 2019">
				<svelte:fragment slot="icons">
					<li><SiHtml5 className="h-5" /></li>
					<li><SiCss3 className="h-5" /></li>
				</svelte:fragment>
				<p class="text-body-sm" slot="description">
					路頭に迷っているときに書店でたまたま手に取った本。ハンズオン形式でやってみると楽しくてWeb業界に興味を持つきっかけに。
				</p>
			</WorkOverview>
		</BubbleContent>
	</SpeechBubble>
	<div class="year font-bold">2018</div>
	<SpeechBubble title="市職員を目指していた時期" description="迷走期間">
		<BubbleContent slot="content">
			<WorkOverview title="公務員試験勉強" term="Apr. 2017 ~ Jan. 2018">
				<p class="text-body-sm" slot="description">
					何を血迷ったか市職員を目指していた時期があったため、一年間みっちり勉強してました。（面接で惨敗）<br
					/>おかげ（？）で本を読める人間になりました。
				</p>
			</WorkOverview>
		</BubbleContent>
	</SpeechBubble>
	<div class="year font-bold">2017</div>
	<SpeechBubble title="空白の半年間">
		<BubbleContent slot="content">
			<WorkOverview title="null" term="Oct. 2016 ~ Mar. 2017">
				<p class="text-body-sm" slot="description">
					心と身体を癒してた期間<br
					/>自分に向いていないことを無理して頑張っていたけど、やりぬく体力も精神力もなかったのだろうと思う。
				</p>
			</WorkOverview>
		</BubbleContent>
	</SpeechBubble>
	<div class="year font-bold">2016</div>
	<SpeechBubble title="カスタマーエンジニア" description="東芝テックソリューションサービス株式会社">
		<BubbleContent slot="content">
			<WorkOverview title="外回り技術営業" term="July. 2015 ~ Sep. 2016">
				<svelte:fragment slot="icons">
					<li><FaCar className="h-5 fill-slate-800" /></li>
					<li><FaScrewDriverWrench className="h-5 fill-slate-800" /></li>
					<li><FaPhone className="h-5 fill-slate-800" /></li>
				</svelte:fragment>
				<div class="text-body-sm" slot="description">
					<p>量販店や飲食店のPOSレジの修理・点検・販売を担当しました。</p>
					<ul class="u-list">
						<li>定期点検</li>
						<li>1日7件ほどの訪問修理</li>
						<li>POSレジ設置・導入</li>
						<li>POSレジ撤去</li>
					</ul>
					<p>
						労働時間が長く1年でドロップアウト。機械に詳しくないお客さんを相手に電話越しや対面でお話しする機会が多かったのでコミュニケーション能力は磨かれました。
					</p>
				</div>
			</WorkOverview>
			<Divider />
			<WorkOverview title="社会人研修" term="Apr. 2015 ~ May. 2015">
				<p class="text-body-sm" slot="description">
					ゆるめの新社会人研修を1ヶ月と、強烈な営業研修を受けさせてもらいました。
					<br />
					2ヶ月もリッチな研修を受けさせてもらえたのは今思うととてもありがたかった。
				</p>
			</WorkOverview>
		</BubbleContent>
	</SpeechBubble>
	<div class="year font-bold">2015</div>
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
