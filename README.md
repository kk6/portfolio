# Portfolio

あしやのポートフォリオです: [ashiyahiro-portfolio.vercel.app](https://ashiyahiro-portfolio.vercel.app/)

## ローカルで動かす

### 1. リポジトリをクローンする

```bash
git clone https://github.com/kk6/portfolio.git
```

### 2. 依存ライブラリのインストール

```bash
npm install
```

### 3. vercel と連携する

`vercel` コマンド初回実行時にメール認証によるプロジェクトリンクが行われる。対話形式で進めていく。

```bash
npm run vercel
```

#### 参照

- [Vercel CLI Reference - Project Linking](https://vercel.com/docs/cli#commands/overview/project-linking)
- [Vercel CLI の基本的な使い方](https://blog.kimizuy.dev/posts/how-to-use-vercel-cli)

### 4. `.env` ファイルを作成する

vercel と連携したら、以下のコマンドを実行して環境変数をそれぞれ追加する。

```bash
npm run vercel env add
```

設定するのは以下の 4 つ

- `NEXT_PUBLIC_MICRO_CMS_WRITE_API_KEY` : MicroCMS の`X-WRITE-API-KEY`
- `MICRO_CMS_WRITE_API_KEY`: 同上
- `MICRO_CMS_API_KEY` : MicroCMS の `X-API-KEY`
- `MICRO_CMS_HOST` : `https://yourdomain.microcms.io/api/v1/`

全部追加し終わったら、vercel から pull

```bash
npm run vercel env pull
```

これで `.env` ファイルが生成される。新たに環境変数を追加したらその都度 `pull` すれば更新される。

### 5. MicroCMS で API を作成

MicroCMS の管理画面で API を作成する。エンドポイントは以下の 3 つ。

| API 名       | エンドポイント   | API の型     |
| ------------ | ---------------- | ------------ |
| サイトデータ | `/sitedata`      | オブジェクト |
| イラスト     | `/illustrations` | リスト       |
| お問い合わせ | `/contacts`      | リスト       |

API 作成のステップ 3 でスキーマを定義する際、`microcms/` 以下の json をインポートする。インポート方法は公式ドキュメント [API スキーマのインポート](https://document.microcms.io/manual/export-and-import-api-schema#hf95e7cc83a) を参照。

### 6. 開発サーバー起動

```bash
npm run vercel dev
```

これで [http://localhost:3000](http://localhost:3000) にアクセス 😋

## ライブラリとか

- JS Framework: [Next.js](https://nextjs.org/)
- CSS Framework: [Chakra-UI](https://chakra-ui.com/)
- Headless CMS: [MicroCMS](https://microcms.io/)
- Deployment: [Vercel](https://vercel.com/)
