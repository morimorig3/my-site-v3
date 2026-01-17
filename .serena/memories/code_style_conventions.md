# コードスタイル・規約

## フォーマット（Prettier）
- **インデント**: タブ使用（`useTabs: true`）
- **クォート**: シングルクォート（`singleQuote: true`）
- **末尾カンマ**: なし（`trailingComma: "none"`）
- **行幅**: 100文字（`printWidth: 100`）

## TypeScript
- **strict mode**: 有効
- **型インポート**: `type` キーワード必須（`@typescript-eslint/consistent-type-imports`）
- **未使用変数**: エラー（`@typescript-eslint/no-unused-vars: error`）

## ESLint ルール
- **console.log禁止**: `no-console: error`
- **import順序**: 自動整列
  1. builtin（Node.js組み込み）
  2. external（外部パッケージ）
  3. @sveltejs/*, svelte（フレームワーク優先）
  4. @src/*（内部パスエイリアス）
  5. parent, sibling, index, object, type

## importの順序例
```typescript
// 1. Svelte関連
import { onMount } from 'svelte';
import type { PageData } from './$types';

// 2. 外部パッケージ
import axios from 'axios';

// 3. 内部モジュール（@src/）
import { someUtil } from '@src/lib/functions';

// 4. 相対パス
import Component from './Component.svelte';

// 5. 型
import type { SomeType } from './types';
```

## ファイル構成規約
- コンポーネント: `src/lib/component/`
- ユーティリティ関数: `src/lib/functions/`
- 型定義: `src/lib/types.ts`
- 定数: `src/lib/const.ts`
- サーバーサイド: `src/lib/server/`
- スキーマ（Zod）: `src/lib/schemas/`
- ルート: `src/routes/`

## Svelte コンポーネント
- `.svelte` ファイル内でTypeScript使用
- script lang="ts" 推奨
