import { Container, Text } from "@chakra-ui/layout"
import { NextPage } from "next"

import Footer from "../components/footer"
import Header from "../components/header"

const Contact: NextPage = () => {
  return (
    <Container maxW="container.xl">
      <Header />
      <Container centerContent>
        <Text>Coming soon...</Text>
      </Container>
      <Footer />
    </Container>
  )
}

export default Contact
