import { Text, Code, Image, AspectRatio } from "@chakra-ui/react"
import { Container, Flex, Heading, Link } from "@chakra-ui/layout"
import Head from "next/head"

import Header from "./components/header"
import Footer from "./components/footer"

const imageUrl =
  "https://64.media.tumblr.com/bf03dcb1f7bfe6ed41864b31130b56d9/e770c7bf6ca9cd59-40/s1280x1920/a98979999f9e07a879f5acc25116398479fb2d68.png"

export default function Home() {
  return (
    <Container maxW="container.xl">
      <Head>
        <title>Ashiyahiro.work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container height="100vh">
        <Heading as="h1" size="2xl" mb="2">
          工事中です
        </Heading>
        <AspectRatio ratio={1}>
          <Image src={imageUrl} alt="cover-image" objectFit="cover" />
        </AspectRatio>
      </Container>
      <Footer />
    </Container>
  )
}
