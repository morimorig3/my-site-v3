---
title: 早く使いたいCSS
date: 2026-09-02
description: 説明文
tags:
  - CSS
draft: true
slug: state-of-css-2026
---
CSSは気づいたらめっちゃできること増えてるので、最近知ったイケてるCSSを紹介
# Gap Decoration
これができます。
![[grid_01.png|430]]
https://microsoftedge.github.io/Demos/css-gap-decorations/playground.html

Gap Decorationは直感的に要素同士の間に罫線を引くことができます。
```css
.layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  row-rule: 1px solid #F00;
  column-rule: 1px solid #00F;
  
  /*
  row-rule-width: 1px;
  row-rule-color: #000;
  row-rule-style: solid;
  */
}
```

gapを使用しなければ普通に要素同士の罫線にすることもできます。
![[grid_02.png]]
もう、borderをこねくり回したり、table要素を使ったり、擬似要素で頑張らなくてもいい。
https://codepen.io/editor/morimorig3/pen/01a06085-1d71-7c30-a373-d96ebb8a7711
## ブラウザサポート状況
行間の罫線を引くrow-ruleは一部ブラウザでのみしか利用できません。
- https://caniuse.com/?search=column-rule
- https://caniuse.com/?search=row-rule

# text-box
これができます。
![[textbox.png]]
個人的にはかなりうれしい。
Webのタイポグラフィは行間（line-height）を指定しているとどうしても文字の上端と下端に余白ができてしまう。
このプロパティを指定するとテキスト要素の上端と下端の余白をカットしてくれる。

この余白分を考慮して上下要素との余白を微調整したりなんてこともやったことがある人は多いんじゃないだろうか。
指定も1行で簡単。
```css
p {
  text-box: trim-both cap alphabetic;
}
```
https://codepen.io/editor/morimorig3/pen/01a05f9a-9149-7e43-8ff5-c3cdd45a99da

## ブラウザサポート状況
うれしいことに明日から使えます。
- https://caniuse.com/?search=text-box
一部のtext-edgeプロパティは実装されていないブラウザもあるので注意しましょう。

# scroll-state queries
コンテナクエリの一種でコンテナクエリはサイズに基づいて小要素にスタイルをつけれるけど、
コンテナのスクロール状態に応じて小要素にスタイルをつけれる。

それ、何に使えるの？というこんなことができる。
https://codepen.io/editor/morimorig3/pen/01a060b6-5982-7621-8f79-a72c06299e2e
本来であればJSをscrollイベントを監視して