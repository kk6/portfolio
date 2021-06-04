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
        <ContactForm />
      </VStack>
    </DefaultLayout>
  )
}

export default Contact
