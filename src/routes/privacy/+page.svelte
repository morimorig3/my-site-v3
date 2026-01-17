<script>
	import { page } from '$app/state';
	import Head from '$lib/component/Head.svelte';
</script>

<Head
	pageTitle="プライバシーポリシー"
	description="当サイトのプライバシーポリシーです。"
	pathName={page.url.pathname}
/>

<div class="l-container text-body py-6 tablet:py-8 laptop:py-10 dark:text-lightBody">
	<h1 class="text-heading-1 dark:text-lightWhite">プライバシーポリシー・免責事項</h1>
	<h2 class="text-heading-2 dark:text-lightWhite">プライバシーポリシー</h2>
	<h3 class="text-heading-3 dark:text-lightWhite">個人情報の利用目的</h3>
	<p>
		当ブログでは、お問い合わせの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
		取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
	</p>
	<h3 class="text-heading-3 dark:text-lightWhite">アクセス解析ツールについて</h3>
	<p>
		当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
	</p>
	<p>
		この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は<a
			href="https://marketingplatform.google.com/about/analytics/terms/jp/"
			target="_blank"
			rel="noopener noreferrer">Googleアナリティクスサービス利用規約のページ</a
		>や<a href="https://policies.google.com/technologies/ads?hl=ja">Googleポリシーと規約ページ</a
		>をご覧ください。
	</p>

	<h3 class="text-heading-3 dark:text-lightWhite">広告について</h3>

	<p>
		「morimorig3.com」は、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
	</p>
	<p>得られた収益はドメインなどの運営費用に当てられています。</p>
	<h2 class="text-heading-2 dark:text-lightWhite">免責事項</h2>
	<p>
		当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。<br
		/>
		また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。<br
		/>
		当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。<br />
		記事の内容は、所属する組織・団体とは関係なく、個人の発言です。
	</p>
	<h2 class="text-heading-2 dark:text-lightWhite">著作権について</h2>
	<p>
		当ブログで掲載している文章や画像などにつきましては、無断転載することを禁止します。<br />
		当ブログは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、<a
			href="https://forms.gle/zh6isNmxAAEhM2iR6"
			target="_blank"
			rel="noopener noreferrer">お問い合わせフォーム</a
		>よりご連絡ください。迅速に対応いたします。※お返事できない場合もございますのでご了承ください。
	</p>
	<h2 class="text-heading-2 dark:text-lightWhite">リンクについて</h2>
	<p>
		当ブログは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。<br />
		ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。
	</p>
</div>

<style>
	h1 {
		margin-top: 64px;
		margin-bottom: 24px;
	}
	h2 {
		margin-top: 64px;
		margin-bottom: 24px;
	}
	h3 {
		margin-top: 40px;
		margin-bottom: 16px;
	}
</style>
