import type { Metadata, Viewport } from "next";
import { Noto_Sans, Noto_Sans_JP, Open_Sans } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto",
});

const openSans = Open_Sans({
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open",
});

// 英字アウトライン見出し（WHAT WE CAN / MERIT / BOOTH など）用
const notoSans = Noto_Sans({
  weight: ["900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-latin",
});

const GTM_ID = "GTM-KPB2C8K";

export const metadata: Metadata = {
  title: "PAPAMAMA CAR'S × GO OUT CAMP 出店決定！｜相談予約で入場チケット無料プレゼント",
  description:
    "PAPAMAMA CAR'SがGO OUT CAMPに出店決定！2026年10月2日(金)〜4日(日)ふもとっぱら。愛車の相談・下取り査定OK。家族で楽しめる塗装体験イベントも開催。相談予約で入場チケット無料プレゼント。",
  openGraph: {
    title: "PAPAMAMA CAR'S × GO OUT CAMP 出店決定！",
    description:
      "2026年10月2日(金)〜4日(日)ふもとっぱら。相談予約で入場チケット無料プレゼント。塗装体験イベントも開催。",
    type: "website",
    locale: "ja_JP",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} ${openSans.variable} ${notoSans.variable}`}>
      <head>
        {/* Google Tag Manager */}
        {/* 指定スニペットを <head> 内上部にそのまま設置するため next/script 等は使わない */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
