---
title: コアウェブバイタルがビジネスに与える影響
date: 2026-07-20
description: 説明文
tags:
  - CoreWebVitals
draft: true
---
[https://web.dev/case-studies/vitals-business-impact?hl=ja](https://web.dev/case-studies/vitals-business-impact?hl=ja) で、コアウェブバアルってなんのやつに立つの？ ビジネスにどのようなプラスの影響をもたらすのか

組織の人それぞれにとって価値が異なる エンドユーザー めっちゃ軽くて使いやすいやんけ！ プロダクトマネージャ プロダクトの品質の指標 開発者 素晴らしい技術で作られた高いパフォーマンスの技術に触れる面白さ いかによくするかを考える楽しさ 経営者 ビジネスに対する長期的な投資

もちろん一番わかりやすいのはランキングとしてのコアウェブバイタル 数値が良ければ検索次に上に出てくる？ [https://developers.google.com/search/blog/2021/04/more-details-page-experience?hl=ja](https://developers.google.com/search/blog/2021/04/more-details-page-experience?hl=ja)

ケーススタディ ◾︎イタリアのボーダフォン LCPを31％改善して売り上げを8%増加させた

LCPの改善前後のABテストをやってたっぽい

・やったこと 重要なHTMLをSSR レンダリングブロックするJSの削減 画像の最適化手法見直し ヒーロー画像のサイズを見直し 重要ではないリソースのロードを遅らせる

影響の判定 ABテストを実施 サーバーサイドでABテストする必要あり

◾︎iCook CLSを15％改善して、広告収入を10％増やした ・やったこと 広告スロットの固定化 広告スクリプトの最適化してヘッダーを先に表示させるようにした

◾︎Tokopedia LCPが55％改善されて、平均セッション時間が23％長くなった

・やったこと LCP要素のSSR LCP要素のプリロード 画像の最適化 圧縮 WebP 画像の遅延読み込み

・ポイント パフォーマンスモニタリングダッシュボードを作った 数値の上下をモニタリングできるようにした

いろいろなレンダリング方法をテストした LCP要素だけSSR 上部コンテンツのSSR 完全なCSR

◾︎Redbus WebVitals全般の改善でモバイルのコンバージョン率を80％ー100％向上 ドメインランキングが192％上昇

・やったこと DOMの挿入方法を改善してCLSを向上←なにやったんやろう？ サードパーティスクリプトを最適化してマイクロサービスを構築Time To InteractiveとTotal Blocking Timeを改善

・ポイント CLSを1.65から0に減らしたことでドメインランキングが全世界で大幅に向上 TTIを8秒から4秒に、TBTを1.2秒から0.7秒に減らしたことでコンバージョン率が大幅に向上 Real User Monitoringツールの活用で実際の指標を把握 パフォーマンス重視の文化を大事にするようになった 結果的にコードの最適化、リリースの迅速化、障害の減少で生産性も向上した

これらのケーススタディはベストプラクティスの導入で多くのことを成し遂げられることを示している

簡単にできること ・画像 WebPを使用する CDN経由で配信する 圧縮する 重要でない画像の遅延読み込み ヒーロー画像のプリロード アスペクト比を指定する

・JavaScript サードパーティJSの遅延読み込み レンダリングブロックするJSの削除 使ってないJSの削除 クリティカルでないJSの遅延読み込み クリティカルなJSのプリロード

・広告と動的コンテンツ スクロールせずに見える範囲の広告スペースの確保 動的コンテンツの高さ指定

その他にも多くのベストプラクティスあり [https://web.dev/explore/learn-core-web-vitals?hl=ja](https://web.dev/explore/learn-core-web-vitals?hl=ja)

日本企業でも活用事例あり 日経スタイルはLCPが18％改善して、ページビュー数が9％増加 アメーバ漫画はCLSスコアが10倍に改善して漫画の閲覧回数を2,3倍に Yahoo! JAPANはCLSを修正、問題のあるページを98％削除してPVを15％増加

すぐはじめよう！ RUMツールでサイトのフィールドデータ収集 RUMツールというのは Search Console Page Speed insight Web Vitals JS CrUX

サードパーティツールもあるよ Cloudflare New Relic Akamai

あとはステークホルダーを数値で説得せよ