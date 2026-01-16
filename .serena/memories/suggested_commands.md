# 開発コマンド

## 開発サーバー
```bash
npm run dev
```
Vite開発サーバーを起動（ホットリロード対応）

## ビルド
```bash
npm run build
```
本番用ビルドを生成

## プレビュー
```bash
npm run preview
```
ビルド結果をローカルでプレビュー

## テスト
```bash
npm run test
```
Vitestでユニットテストを実行

## 型チェック
```bash
npm run svelte-check:check
```
svelte-checkで型チェックを実行

```bash
npm run check:watch
```
型チェックをウォッチモードで実行

## リント・フォーマット

### チェックのみ
```bash
npm run eslint:check    # ESLintチェック
npm run prettier:check  # Prettierチェック
npm run cspell          # スペルチェック
```

### 自動修正
```bash
npm run eslint:fix      # ESLint自動修正
npm run prettier:fix    # Prettier自動フォーマット
npm run fix             # 全ての自動修正を実行
```

## 全チェック（CI用）
```bash
npm run check
```
以下を順番に実行:
1. svelte-check（型チェック）
2. Prettier（フォーマットチェック）
3. ESLint（リントチェック）
4. cspell（スペルチェック）
5. Vitest（テスト）

## Git hooks
```bash
npm run prepare
```
Huskyをインストール（pre-commitフック設定）

## システムコマンド（macOS/Darwin）
```bash
ls -la          # ファイル一覧
cd <dir>        # ディレクトリ移動
grep -r "text"  # 再帰検索
find . -name    # ファイル検索
git status      # Git状態確認
git diff        # 差分確認
```
