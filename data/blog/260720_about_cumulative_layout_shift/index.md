---
title: CLSについて
date: 2026-07-18
description: 説明文
tags:
  - CoreWebVitals
draft: true
---
https://web.dev/articles/cls?hl=ja
Cumulative Layout Shiftは予期しないレイアウトの変化という意味
Cumulativeは累積という意味

予期しないレイアウトの変化の悪い影響
- テキストが急に移動して読みにくい
- 間違ったボタンやリンクをクリックしてしまう
- など

記事の動画を見るとめちゃわかりやすい
[CLSの再現動画](https://web.dev/static/articles/cls/video/web-dev-assets/layout-instability-api/layout-instability2.mp4?hl=ja)

なぜこんなことが起きるのか？さまざまな理由があるが
- サイズが不明な画像や動画などのリソースが非同期に読み込まれて、読み込み完了次第画面にボコっと表示される場合
- 既存コンテンツの前に動的にDOM要素が追加される場合
- 初期のフォールバックよりも大きくまたは小さくレンダリングされるWebフォント
- サイズを動的に変更するサードパーティ製の広告やウィジェット

なぜ開発中に聞きづらいのか？
- パーソナライズされたコンテンツは開発中のデータと異なることが多い
- 画像や動画は開発中は何度も読み込むのでキャッシングされているが大抵のユーザーにとっては初めてだ
- ローカルで呼び出すAPI呼び出しは非常に高速なので本番環境では結構遅かったりする

なので実際のユーザーで発生する頻度を計測することが重要

そもそもCLSってなんじゃい

> CLS は、ページのライフサイクル全体で発生した[予期しない](https://web.dev/articles/cls?hl=ja#expected_vs_unexpected_layout_shifts)レイアウト シフトの_レイアウト移動スコア_の最大バーストを測定する指標です。

要はページ読み込んでから画面の要素がどれくらい大幅に移動したかという
移動しすぎてると前述の通り誤タップとか読みづらさが発生するからよくない

レイアウトシフトというイベントは要素がレンダリングされた時点から少しでも変更があれば発生する
つまり、ページの読み込み時には発生しまくっているということ

発生しまくっているレイアウトシフトをひとまとめにする考え方
＝人間の知覚と近くて複数の小さな変更を1つの変化としてとらえる
セッションウィンドウと呼んでいる
詳細はレイアウトシフト間の感覚が1秒未満かつ合計5秒以内のレイアウトシフトのまとまりをセッションウィンドウと呼ぶ
これまた[動画](https://web.dev/static/articles/cls/video/web-dev-assets/better-layout-shift-metric/session-window.mp4?hl=ja)がわかりやすい

いいCLSとはどんなものなんじゃい？
レイアウトの移動スコアが0.1未満が良いとされてる
![[good-cls-values.svg|697]]
なんで0.1？とするかの議論は[こちら](https://web.dev/articles/defining-core-web-vitals-thresholds?hl=ja)で

レイアウトシフトの計測詳細
[Layout Instability API](https://github.com/WICG/layout-instability)で定義されてる
ビューポートないに表示されている要素が2つのフレーム間で移動するたび（要素の左上の座標が変わる度に）レイアウトシフトが発生したと見なされる