---
title: 'ブログを始めました'
date: '2026-07-18'
description: 'このサイトにブログ機能を追加した経緯と、markdown + shiki 構成について。'
tags: ['SvelteKit', 'Markdown', 'Blog']
draft: false
---

## はじめに

このサイトに markdown ベースのブログ機能を追加しました。Web.dev などで学んだフロントエンドの知識をメモとして残していきます。

![カバー画像](cover.png)

## 特徴

- GFM 対応(テーブル、取り消し線、タスクリスト)
- シンタックスハイライト(shiki)

| 機能 | 対応状況 |
| --- | --- |
| テーブル | ✅ |
| ~~CMS~~ | ❌(あえて未対応) |

```ts
export const hello = (): string => {
	return 'world';
};
```

- [x] frontmatter バリデーション
- [ ] タグ一覧ページ
