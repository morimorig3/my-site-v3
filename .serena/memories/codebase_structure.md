# コードベース構造

```
my-site-v3/
├── src/
│   ├── app.html          # HTMLテンプレート
│   ├── app.css           # グローバルCSS
│   ├── app.d.ts          # アプリ型定義
│   ├── store.ts          # Svelteストア
│   ├── lib/
│   │   ├── index.ts      # lib エクスポート
│   │   ├── const.ts      # 定数定義
│   │   ├── types.ts      # 型定義
│   │   ├── component/    # Svelteコンポーネント
│   │   ├── functions/    # ユーティリティ関数
│   │   ├── modules/      # モジュール
│   │   ├── regex/        # 正規表現
│   │   ├── schemas/      # Zodスキーマ
│   │   └── server/       # サーバーサイドコード
│   └── routes/
│       ├── +layout.svelte    # ルートレイアウト
│       ├── +layout.ts        # レイアウトロード
│       ├── +page.svelte      # ホームページ
│       ├── +page.server.ts   # ホームサーバー処理
│       ├── about/            # Aboutページ
│       ├── books/            # Booksページ
│       ├── contact/          # Contactページ
│       ├── develop/          # Developページ
│       ├── works/            # Worksページ
│       ├── privacy/          # プライバシーポリシー
│       └── designSystem/     # デザインシステム確認用
├── data/                 # データファイル
├── assets/               # アセット
├── static/               # 静的ファイル
├── resource/             # リソースファイル
├── .github/              # GitHub設定
├── .husky/               # Gitフック
├── .vscode/              # VSCode設定
├── svelte.config.js      # SvelteKit設定
├── vite.config.ts        # Vite設定
├── tailwind.config.js    # Tailwind設定
├── postcss.config.js     # PostCSS設定
├── tsconfig.json         # TypeScript設定
├── .eslintrc.cjs         # ESLint設定
├── .prettierrc           # Prettier設定
├── .cspell.json          # cspell設定
└── package.json          # パッケージ設定
```

## パスエイリアス
- `$lib` → `src/lib`
- `@src` → `src`（ESLintで設定）

## SvelteKitルーティング
- `+page.svelte` - ページコンポーネント
- `+page.ts` - クライアントサイドロード
- `+page.server.ts` - サーバーサイドロード
- `+layout.svelte` - レイアウトコンポーネント
- `+layout.ts` - レイアウトロード
