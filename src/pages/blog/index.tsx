import {
  Container,
  Flex,
  List,
  ListItem,
  StackDivider,
  VStack,
} from "@chakra-ui/layout"
import { Text, Heading } from "@chakra-ui/react"
import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next"
import { NextSeo } from "next-seo"
import { BlogCard } from "../../components/blog-card"
import { Layout } from "../../components/layout"
import { BlogsResponse } from "../../types/blog"
import { client } from "../../utils/api"

const url = "https://ashiyahiro-portfolio.vercel.app/blog"
const title = "Blog"
const description = "記事一覧"

type StaticProps = {
  posts: BlogsResponse
}
type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Blogs: NextPage<PageProps> = (props) => {
  const { posts } = props
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
            w="container.md"
          >
            {posts ? (
              posts.contents.map((p) => (
                <ListItem key={p.id}>
                  <BlogCard
                    title={p.title}
                    description={p.description ? p.description : p.body}
                    postedAt={p.publishedAt}
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

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const posts = await client.blog.$get({
    query: {
      fields: "id,title,description,body,category,slug,publishedAt,updatedAt",
    },
  })
  return {
    props: { posts },
    revalidate: 60,
  }
}

export default Blogs
