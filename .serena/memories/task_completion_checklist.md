# タスク完了時チェックリスト

コード変更後は以下を確認してください。

## 必須チェック
```bash
npm run check
```
このコマンドで以下が全て実行されます：
- svelte-check（型チェック）
- prettier:check（フォーマット）
- eslint:check（リント）
- cspell（スペル）
- test（テスト）

## 個別チェック（デバッグ時）

### 1. 型チェック
```bash
npm run svelte-check:check
```

### 2. フォーマット確認・修正
```bash
npm run prettier:check   # 確認のみ
npm run prettier:fix     # 自動修正
```

### 3. リント確認・修正
```bash
npm run eslint:check     # 確認のみ
npm run eslint:fix       # 自動修正
```

### 4. スペルチェック
```bash
npm run cspell
```
未知の単語は `.cspell.json` の `words` 配列に追加

### 5. テスト
```bash
npm run test
```

## コミット前
- pre-commitフック（Husky）が自動でチェックを実行
- チェックが失敗するとコミットがブロックされる

## よくあるエラーと対処

### import順序エラー
```bash
npm run eslint:fix
```
で自動修正

### フォーマットエラー
```bash
npm run prettier:fix
```
で自動修正

### console.logエラー
`no-console` ルールにより禁止。本番コードからは削除すること。

### 未使用変数エラー
使用しない変数は削除するか、意図的に無視する場合は `_` プレフィックスを検討。
