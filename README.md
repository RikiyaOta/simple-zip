# Simple Zip

選択したファイルを zip にまとめるだけのサービス。

URL: https://simple-zip.rikiyaota.kyoto/


# 使用技術

- Next.js
    - ページ1つだけ、Static export を利用しためちゃくちゃ単純なサイト。
- Cloudflare Pages
    - [こちら](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/)を参考にデプロイをした。とても簡単でした。
    - `infra/_headers`でヘッダーを変えている。
