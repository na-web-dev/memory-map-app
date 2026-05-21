# 思い出記録アプリ（memory-map-app）

旅行やお出かけの思い出を記録・管理できるアプリ  
写真やメモを登録したり、訪れた都道府県を視覚的に確認が可能

## ■ 機能

- 思い出登録・編集・削除
- 思い出一覧表示
- 日本地図表示
- カレンダー表示
- 写真登録（予定）
- タグ機能（予定）
- 検索機能（予定）
- ログイン機能（予定）
- お気に入り機能（予定）

## ■ 技術スタック

### フロントエンド

- React（Vite）
- TypeScript

### バックエンド

- Ruby on Rails（API）

### DB

- SQLlite

## ■ ディレクトリ構成

```
nursery-manager-app/
├── frontend/
├── backend/
├── .gitignore
└── README.md
```

## ■ 実行方法

### backend

```
cd ./backend
bundle install
rails db:create
rails db:migrate
rails s
```

### frontend

```
cd ./frontend
npm install
npm run dev
```

## ■ memo

- フロントエンドとバックエンドを分離した構成で作成
- ReactからRails APIへ通信してデータを管理
- component分割を意識して開発
- 予定
  　・日本地図と連携したUIを実装予定
  　・登録フォームのバリデーション・入力チェック・エラー表示・入力保持
  　・ログイン機能追加
