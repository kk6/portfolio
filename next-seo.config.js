import { AUTHOR_NAME, SITE_NAME, SITE_URL } from "./src/constants"

const title = `${AUTHOR_NAME} – Developer, Illustrator.`
const description = "個人的なポートフォリオサイトです。"

const SEO = {
  title,
  titleTemplate: `%s | ${SITE_NAME}`,
  description,
  canonical: SITE_URL,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
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
