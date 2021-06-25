import { Container } from "@chakra-ui/layout"
import { NextPage } from "next"
import { NextSeo } from "next-seo"

import { DefaultLayout } from "../components/layouts/DefaultLayout"
import { Hero } from "../components/modules/Hero"
import { SITE_URL } from "../constants"

const url = SITE_URL
const title = "Home"
const description = "ホーム"

const Home: NextPage = () => {
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
      <Container maxW="container.lg">
        <Hero />
      </Container>
    </DefaultLayout>
  )
}

export default Home
