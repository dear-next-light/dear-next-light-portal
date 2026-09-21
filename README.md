# Dear Next Light — v0.1

ゲーム・ツール・実験を紹介する独立した静的ポータル。実行時の依存パッケージ、DB、ログイン機能はありません。作品のURLは未提供のためComing soonにしています。画像は紹介用のイメージイラストです。

## 公開情報

- 本番サイト: https://dear-next-light.pages.dev/
- ソース: https://github.com/dear-next-light/dear-next-light-portal
- 初回公開: Cloudflare PagesのDirect Uploadを使用。GitHubへのpushによる自動公開は未接続です。
- 更新: `node scripts/build.mjs`で生成し、Cloudflareのdear-next-lightプロジェクトからpublicの中身をZIPにして再アップロードします。
- 以下のGit連携手順は、新規のGit連携Pagesプロジェクトを作る場合の手順です。Direct UploadプロジェクトからGit連携への切り替えはできません。

## ローカル起動

Node.jsがある環境で、リポジトリ直下から実行します。npm installは不要です。

```sh
node scripts/build.mjs
node scripts/serve.mjs
```

http://127.0.0.1:4173 を開きます。停止はCtrl+C。

## 構成

- public/: 公開用HTML・CSS・JS・画像・ヘッダー設定。ここだけを配信します。
- data/projects.json: 作品のデータ。
- site.config.json: 公開URLと解析設定。
- scripts/build.mjs: データから静的HTMLとSEOファイルを生成。Node標準機能のみ。
- scripts/serve.mjs: ローカル確認用。運用サーバーとしては使用しません。

## GitHubとCloudflare Pagesへの公開

1. このフォルダー専用の新規GitHubリポジトリを作成してコードをpushします。他作品のリポジトリは変更しません。
2. CloudflareダッシュボードでWorkers & Pages → Create application → Pages → Connect to Gitを選択し、このリポジトリだけを接続します。
3. Framework preset: None / Production branch: main / Build command: node scripts/build.mjs / Build output directory: public / Root directory: リポジトリ直下。
4. 初回はCloudflareが提供するCF_PAGES_URLをメタデータ生成に利用します。公開後、正式な本番URLをsite.config.jsonのsiteUrlに保存して再デプロイします。以後はプレビューにも正式なcanonicalが入ります。
5. 環境変数は通常不要です。必要ならSITE_URLで公開元URLを上書きできます。

生成済みpublicをそのまま配信する場合はBuild command: exit 0 / Build output directory: publicでも動作します。作品追加・設定変更の後は必ずローカルで再生成してコミットしてください。

公式手順: https://developers.cloudflare.com/pages/get-started/git-integration/

## プロダクト追加・更新

data/projects.jsonにオブジェクトを追加し、node scripts/build.mjsを実行します。

```json
{"id":"example","title":"Example","category":"Tool","description":"A useful little tool.","descriptionJa":"短い日本語説明。","image":"example.svg","imageAlt":"Meaningful image description","url":"https://example.com","featured":true}
```

画像をpublic/assets/imagesに配置します。featuredは最大3件表示。categoryはGame / Tool / Experiment、ほかの値を追加するとフィルターも自動で追加されます。空のurlは準備中のカードになり、ダミーリンクは作りません。HTTPSの公開URLを設定するとカード全体がリンクになり、新しいタブで開きます。

## GA4

初期状態は無効で、外部解析スクリプトを読み込みません。site.config.jsonのga4MeasurementIdにG-から始まる測定IDを入れ、analyticsEnabledをtrueにして再生成します。Privacyの解析説明も同時に切り替わります。project_clickイベントにはproject_name / category / location（featured または all_projects）が入ります。測定IDは公開設定であり、APIキーや秘密情報は入れません。公開対象地域や運用に応じた同意対応を用意してから有効化してください。

## OGP・URL変更

public/assets/images/og.png（1200×630）を差し替えます。site.config.jsonのsiteUrlを正式なHTTPS origin（末尾スラッシュなし）にして再生成するとcanonical / og:url / og:image / robots.txt / sitemap.xmlをまとめて更新します。公開前でsiteUrlが空の場合、未確認のURLを掲載しないためこれらは省略されます。Contactは窓口未提供のため準備中です。

## 確認

/、/privacy、/disclaimer、存在しないパスの404、360/390/768/1024/1440pxの表示、カテゴリ切り替え、キーボードfocusを確認します。JavaScriptが無効でも全作品と本文を閲覧できます。公開後は実際の本番URLでcanonicalとOGP、Lighthouseを再確認してください。

## 背景と浮遊演出

ユーザー提供の風景画像をWebPに最適化し、PC用約130KB・スマホ用約44KBで配信しています。浮遊する図形はインラインSVGとCSSのtransformのみで動き、追加ライブラリはありません。Pause motionで停止でき、prefers-reduced-motion設定では自動的に静止します。画像の差し替え先はpublic/assets/images/nature-hero.webpとnature-hero-mobile.webpです。

