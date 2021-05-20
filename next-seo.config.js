const title = "あしやひろ – Developer, Illustrator."
const description = "個人的なポートフォリオサイトです。"

const SEO = {
  title,
  titleTemplate: "%s | Ashiyahiro.work",
  description,
  canonical: "https://ashiyahiro-portfolio.vercel.app",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://ashiyahiro-portfolio.vercel.app",
    title,
    description,
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  twitter: {
    handle: "@kk6",
    site: "@kk6",
    cardType: "summary_large_image",
  },
}

export default SEO
