import { Heading, VStack } from "@chakra-ui/layout"
import { NextPage } from "next"
import { NextSeo } from "next-seo"
import { ContactForm } from "../components/contact-form"
import { Layout } from "../components/layout"
import { SITE_URL } from "../constants"

const url = `${SITE_URL}/contact`
const title = "Contact"
const description = "お問い合わせ"

const Contact: NextPage = () => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default Contact
