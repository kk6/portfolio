import { Container, Heading } from "@chakra-ui/layout"
import { Image, AspectRatio } from "@chakra-ui/react"
import { NextPage } from "next"
import { NextSeo } from "next-seo"

import Layout from "../components/layout"

const url = "https://ashiyahiro-portfolio.vercel.app"
const title = "Home"
const description = "ホーム"
const imageUrl =
  "https://64.media.tumblr.com/bf03dcb1f7bfe6ed41864b31130b56d9/e770c7bf6ca9cd59-40/s1280x1920/a98979999f9e07a879f5acc25116398479fb2d68.png"

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
      <Container height="100vh">
        <Heading as="h1" size="2xl" mb="2">
          工事中です
        </Heading>
        <AspectRatio ratio={1}>
          <Image src={imageUrl} alt="cover-image" objectFit="cover" />
        </AspectRatio>
      </Container>
    </Layout>
  )
}

export default Home
