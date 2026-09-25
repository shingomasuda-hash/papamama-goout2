# PAPAMAMA CAR'S × GO OUT CAMP 2026 LP

完成見本 `GOOUTCAMP2026_02.jpg` を忠実に Web 化した 1 ページ LP（専用ドメインのルート `/` に表示）。

- Next.js 16（App Router）/ TypeScript / CSS Modules
- 静的プリレンダリング（`○ /`）。Vercel にそのままインポートして公開可能（Framework Preset: Next.js、設定追加不要）

## 開発

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 本番ビルド
npm run lint
```

## 構成

| パス | 内容 |
| --- | --- |
| `src/app/page.tsx` | LP 本体（全セクション） |
| `src/app/page.module.css` | LP スタイル。数値は見本（幅596px）の座標を `1rem = 100px` で換算 |
| `src/app/globals.css` | ルート文字サイズ（画面幅比例）・色トークン |
| `src/app/layout.tsx` | GTM（GTM-KPB2C8K）、フォント、メタ情報 |
| `src/app/cta.ts` / `components/Cta.tsx` | CTA リンク先と計測用属性 |
| `public/images/` | 見本から切り出した写真・ロゴ素材（写真上の文字は除去し HTML で再構成） |

## レイアウト

- `html { font-size: calc(min(100vw, 450px) / 5.96) }` により、SP ではどの幅でも見本と同じ構図で拡縮。
- PC（451px 以上）は幅 450px の SP レイアウトを中央配置し、左右は黒背景。

## CTA / 計測

すべての CTA に `data-cta` と `data-cta-position` を付与しています。GTM ではクリック要素の
`data-cta` / `data-cta-position` を変数化してトリガー・イベントに利用してください。

| data-cta | リンク先 | 設置箇所（data-cta-position） |
| --- | --- | --- |
| `consultation`（相談予約） | `https://s.lmes.jp/landing-qr/2007227153-vjoL5182?uLand=8DfPMx` | `hero` / `middle`×2 / `footer` / `footer-sns`（LINEアイコン） |
| `paint-event`（塗装体験） | `https://s.lmes.jp/landing-qr/2007227153-vjoL5182?uLand=Z9vBMh` | `hero` / `paint`（塗装概要の「LINEから予約」） / `footer` |
