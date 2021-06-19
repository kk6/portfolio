import { Container } from "@chakra-ui/layout"
import { NextPage } from "next"
import { NextSeo } from "next-seo"
import { Hero } from "../components/hero"
import { Layout } from "../components/layout"
import { SITE_URL } from "../constants"

const url = SITE_URL
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
      <Container maxW="container.lg">
        <Hero />
      </Container>
    </Layout>
  )
}

export default Home
