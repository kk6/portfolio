import {
  Container,
  Flex,
  List,
  ListItem,
  StackDivider,
  VStack,
} from "@chakra-ui/layout"
import { Text, Heading } from "@chakra-ui/react"
import { NextPage } from "next"
import { NextSeo } from "next-seo"
import { posts } from "../../../fixtures/blogs"
import { BlogCard } from "../../components/blog-card"
import { Layout } from "../../components/layout"

const url = "https://ashiyahiro-portfolio.vercel.app/blog"
const title = "Blog"
const description = "記事一覧"

const Blogs: NextPage = () => {
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
      <Container maxW="container.xl" justify="center">
        <Heading as="h1" p={2}>
          {title}
        </Heading>
        <Flex justify="center">
          <VStack
            as={List}
            listStyleType="none"
            divider={<StackDivider borderColor="gray.200" />}
            align="stretch"
            maxW="container.lg"
          >
            {posts.length > 0 ? (
              posts.map((p) => (
                <ListItem key={p.id}>
                  <BlogCard
                    title={p.title}
                    description={p.body}
                    postedAt={p.createdAt}
                    category={p.category.name}
                    slug={p.slug}
                  />
                </ListItem>
              ))
            ) : (
              <Text>まだ何もありません</Text>
            )}
          </VStack>
        </Flex>
      </Container>
    </Layout>
  )
}

export default Blogs
