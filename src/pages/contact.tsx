import { Heading, VStack } from "@chakra-ui/layout"

import { NextPage } from "next"
import HookForm from "../components/contact-form"
import Layout from "../components/layout"

const Contact: NextPage = () => {
  return (
    <Layout>
      <VStack>
        <Heading>お問い合わせ</Heading>
        <HookForm />
      </VStack>
    </Layout>
  )
}

export default Contact
