import { Container, Heading } from "@chakra-ui/layout"
import { NextPage } from "next"
import { NextSeo } from "next-seo"

import Layout from "../components/layout"

const url = "https://ashiyahiro-portfolio.vercel.app"
const title = "Home"
const description = "ホーム"

const Home: NextPage = () => {
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
      <Container>
        <Heading as="h1" size="2xl" mb="2">
          工事中です
        </Heading>
      </Container>
    </Layout>
  )
}

export default Home
