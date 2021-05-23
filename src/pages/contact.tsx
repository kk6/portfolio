import { Heading, VStack } from "@chakra-ui/layout"
import { NextPage } from "next"
import { NextSeo } from "next-seo"
import { ContactForm } from "../components/contact-form"
import { Layout } from "../components/layout"

const url = "https://ashiyahiro-portfolio.vercel.app/contact"
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
