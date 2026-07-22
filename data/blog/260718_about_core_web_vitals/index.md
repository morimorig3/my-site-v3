---
slug: about-core-web-vitals
title: コアウェブバイタルについて
date: 2026-07-18
description: 説明文
tags:
  - CoreWebVitals
draft: true
---
[https://web.dev/articles/vitals?hl=ja](https://web.dev/articles/vitals?hl=ja) 
LCP 読み込み完了の速度は2.5秒以内が目標 INP 0.2秒以内に操作ができるようになるべき CLS 0.1以下 ページのガタ付きについてだが0.1とはどういう尺度だろう

全ての指標で75パーセンタイルを満たしていれば合格

変化について コアウェブバイタルは常に変化し続ける Experimental 将来のコアウェブバイタル、テストやコミュニティのフィードバックをもらっている途中 Pending テストとフィードバックが完了して安定版になるまでの状態 ほぼ確定？ Stable 現在の安定版でいまはLCP,INP,CLSの3つ

試験運用版でどのようなことが行われているか 以前の指標で対応できていなかった事象に対応することを目的とする たとえば、INPはFirst Input Delayの数値が良くても実際には操作ができないような抜け穴を埋めるために開発された より包括的にウェブ上のランタイムパフォーマンスの問題対処される バグを特定して初期段階の定義を検討する

Pendingではどのようなことが行われているか 十分なフィードバックが得られて有効性が証明された場合保留中になる 多くのエンジニアが適応する時間を確保するため最低6ヶ月保留される コミュニティのフィードバック次第では再検討もありうる

安定版ではどのようなことが行われているか 安定版の指標も積極的にサポートされる FIDがかつて安定版だったように安定版でも必ずしも永続的ではない

コアウェブバイタルはどのツールで計測できる？ Chrome ユーザーエクスペリエンスレポート Chrome DevTools Page Speed Insights Search Console JavaScript

web-vitalsライブラリで簡単に計測可能 import {onCLS, onINP, onLCP} from 'web-vitals'; 値をDBに積むこともできる

本番公開しなくても測定できる 例えば開発環境などは Chrome DevTools Light house でもやっぱ本番環境で計測するのがいっちゃん大事 データ量も違うし、インフラも、負荷も違う

コアウェブバイタルの他にもウェブの指標がある Time to First Byte First Contentful Paint Total Blocking Time これらはコアウェブバイタルの改善になる指標とはなりうる ユーザー中心指標とは言えないのでコアウェブバイタルには含まれていない

ウェブバイタルの変更履歴 [https://chromium.googlesource.com/chromium/src/+/main/docs/speed/metrics_changelog/README.md](https://chromium.googlesource.com/chromium/src/+/main/docs/speed/metrics_changelog/README.md) 一見の価値がありそう