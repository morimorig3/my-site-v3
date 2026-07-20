---
title: LCPについて
date: 2026-07-18
description: 説明文
tags:
  - CoreWebVitals
draft: true
---
 [https://web.dev/articles/lcp?hl=ja](https://web.dev/articles/lcp?hl=ja) LCPは人間に知覚される読み込み速度を測定するための指標

これまでの歩み loadイベント DOMContentLoadedイベントはユーガーの画面に表示される内容と一致しない イベントは起こったけどJSで画面が変わるようなことが起こり得る

First Contentful Paintは読み込みの初期の状態しか追えない スプラッシュ画面やローディングが表示されててもFCPは良くなる しかし、ユーザーは待たされている！

Lighthouseで利用できるFirst Meaningful PaintやSpeed Indexは複雑で難しく間違ってることも多いので ページのメインコンテンツが読み込まれたタイミングがわからない

ページのメインコンテンツが読み込まれたって何？ 議論の末、最も大きな要素がページのメインコンテンツであると結論づけた これはW3Cウェブパフォーマンスで議論された [https://www.w3.org/webperf/](https://www.w3.org/webperf/)

もっと具体的にLCPって何？ ビューポート内に表示される 最大の画像 テキストブロック または動画のレンダリング時間を ユーザーが最初にページに移動したタイミングを比較する

こんなものも含まれる 前のページのアンロード時間 接続のセットアップ時間 リダイレクト時間 そのたTime to First Byte遅延 本番とテスト環境ローカルでえらく異なることが多い

いいLCPスコアの定義とは？
いいLCPはなんといっても2.5秒
モバイルとデスクトップで75パーセンタイルを測定する←どういう意味だろう？
さっきから75パー戦タイルの意味がわからん

なぜ2.5秒以下なのかの精緻な議論はこっちで
https://web.dev/articles/defining-core-web-vitals-thresholds?hl=ja

LCPの計測対象となる要素は？
img要素、svg要素、video要素、url()関数で読み込まれた背景画像、ブロックレベルの要素
ブロックレベルってほとんどやん
 画像や動画系は最初のフレームの表示時間
 svgはimageタグだけ
 複雑になることを防ぐためにあえて要素を限定的にしている

特定の要素でもユーザーがコンテンツではないと感じるものは外れるようになる
例えば、透明度0の要素、ビューポート全体を覆っていてコンテンツではなく背景っぽいもの、
FCPやLCPのContentfulというワードにはユーザーがコンテンツと思うものという意味が込められている

要素のサイズとは？
あくまでユーザーにとっての大きさが判定対象
つまり、ビューポートに対していっぱいいっぱいの大きさだとLargeだし
めちゃくちゃ広いビューポートに対しての大きい画像ではLargeとは言えない

LCPはいつチェックされるのか
Webページは段階的に読み込まれる
ある地点Aではこの要素がラージ　しかし時間が経ってからだとこっちがラージだった

ヒーロー画像とテキストを含むページだったら当然テキストが表示されて、後から画像が表示される
テキストが表示された時点ではテキスト群がラージストコンテンツだけど、画像が後から出てきたら後から出てきた画像がラージストコンテント
つまり、より大きなコンテンツが出てくるたびに更新される
また、新しい要素がDOMに追加された場合もそれがより大きなコンテンツサイズだった場合は更新される
大きな要素が追加されるたびに以下のような処理が行われるらしい
> `largest-contentful-paint` タイプの [`PerformanceEntry`](https://developer.mozilla.org/docs/Web/API/PerformanceEntry) をディスパッチ

要素が削除されてもラージストコンテンツが更新されることはない

ユーザーがページ操作、クリックやスクロールやキー操作をすると計測が停止する
なぜならスクロールしてからだと新しい要素が表示されたりすることがあるから
あくまで読み込みが始まってユーザーが使えるようになるまでの速度が重要視されているのだろう

別タブでバックグラウンドで読み込まれている場合はタブにフォーカスを当てるまではPeformanceEntryがディスパッチされない
このようなケースの場合ユーザーが認識する読み込み時間が計測できないのでLCPは報告されないことになる

要素のサイズ変更
要素のサイズや位置を変更しても新しいLCPは生成されない
要素の初期サイズとビューポート内の位置のみが考慮される
画面外でレンダリングされてその後画面内に入るものに関しては報告されない可能性があるし、その逆もある

![[CNN_LCP.png]]
![[techcrunch_LCP.png]]
![[Google_LCP.png]]
![[IG_LCP.png]]

どちらもコンテンツの読み込みと同時にLCPのコンテンツが変化している

LCPを計測するには・・？
開発環境でも本番環境でも計測可能
本番
Chromeユーザーエクスペリエンスレポート
PageSpeedInsights
Search Console
Web vitals JavaScript
開発
Chrome DevTools
Lighthouse
PageSpeedInsight
WebPageTest

Largest Contentful Paint APIを使えばJSでも計測できる
```
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP candidate:', entry.startTime, entry);
  }
}).observe({type: 'largest-contentful-paint', buffered: true});
```
実際の指標とは異なることがある

