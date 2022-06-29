import {
  Container,
  List,
  ListItem,
  StackDivider,
  VStack,
} from "@chakra-ui/layout"
import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import Link from "next/link"
import { NextSeo } from "next-seo"

import { DefaultLayout } from "../components/layouts/DefaultLayout"
import { Hero } from "../components/modules/Hero"
import { SITE_URL } from "../constants"
import { getCurrentNews } from "../lib/api"
import { BlogsResponse } from "../types/blog"
import { formatDate } from "../utils/date"

const url = SITE_URL
const title = "Home"
const description = "ホーム"

type StaticProps = {
  items: BlogsResponse
}
type PageProps = InferGetStaticPropsType<typeof getStaticProps>

type NewsProps = {
  items: BlogsResponse
}
const News: React.FC<NewsProps> = ({ items }) => {
  return (
    <Container>
      <Heading>News</Heading>
      <VStack
        as={List}
        listStyleType="none"
        divider={<StackDivider borderColor="gray.200" />}
        align="stretch"
        w="container.md"
      >
        {items.contents.length > 0 ? (
          items.contents.map((item) => (
            <ListItem key={item.id} as={Flex} p="4">
              <Box minW="200px">{formatDate(item.publishedAt)}</Box>
              <Box>
                <Link href={`/blog/${item.id}`}>{item.title}</Link>
              </Box>
            </ListItem>
          ))
        ) : (
          <Text>まだ何もありません</Text>
        )}
      </VStack>
    </Container>
  )
}

const Home: NextPage<PageProps> = (props) => {
  const { items } = props
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
        <News items={items} />
      </Container>
    </DefaultLayout>
  )
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const items = await getCurrentNews()
  return {
    props: { items },
    revalidate: 60,
  }
}

export default Home
