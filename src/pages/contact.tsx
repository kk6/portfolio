import { Heading, VStack } from "@chakra-ui/layout"
import { NextPage } from "next"
import { NextSeo } from "next-seo"

import { DefaultLayout } from "../components/layouts/DefaultLayout"
import { ContactForm } from "../components/modules/ContactForm"
import { SITE_URL } from "../constants"

const url = `${SITE_URL}/contact`
const title = "Contact"
const description = "お問い合わせ"

const Contact: NextPage = () => {
  const postUrl = "https://ashiyahiro.microcms.io/api/v1/contacts"
  const requestHeaders: HeadersInit = new Headers()
  requestHeaders.set("Accept", "application/json")
  requestHeaders.set("Content-Type", "application/json")
  requestHeaders.set(
    "X-WRITE-API-KEY",
    process.env.NEXT_PUBLIC_MICRO_CMS_WRITE_API_KEY || ""
  )

  return (
    <DefaultLayout>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <VStack>
        <Heading>お問い合わせ</Heading>
        <ContactForm url={postUrl} requestHeaders={requestHeaders} />
      </VStack>
    </DefaultLayout>
  )
}

export default Contact
