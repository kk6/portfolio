import { Container, Heading, VStack, Text, Box } from "@chakra-ui/layout"
import { Avatar } from "@chakra-ui/react"
import { NextPage } from "next"
import { NextSeo } from "next-seo"
import { Layout } from "../components/layout"
import { ListBox } from "../components/list-box"

const url = "https://ashiyahiro-portfolio.vercel.app/about"
const title = "About"
const description = "あしやひろについて"

const awards = {
  title: "受賞歴",
  items: [
    {
      url: "https://www.pixiv.net/contest/girls",
      title:
        "pixiv summer girls collection 年下彼女 イラストコンテンスト: 【年下彼女】pixiv賞",
    },
    {
      url: "https://www.pixiv.net/contest/girls2",
      title:
        "pixiv winter girls collection 年下彼女 イラストコンテンスト: 【年下彼女】pixiv賞",
    },
  ],
}
const works = {
  title: "お仕事情報",
  items: [
    {
      url:
        "https://www.animalspedal.jp/products/animals-pedal-custom-illustrated-008-major-overdrive-by-%E3%81%82%E3%81%97%E3%82%84%E3%81%B2%E3%82%8D-%E3%83%9C%E3%83%96%E3%82%AB%E3%83%83%E3%83%88-lightblue",
      title:
        "Animals Pedal Custom Illustrated Major Overdrive by あしやひろ &quot;ボブカット&ldquo; 筐体表面イラスト",
    },
    {
      url:
        "https://www.animalspedal.jp/products/animals-pedal-custom-illustrated-014-major-overdrive-by-%E3%81%82%E3%81%97%E3%82%84%E3%81%B2%E3%82%8D-alice-faintpink",
      title:
        "Animals Pedal Custom Illustrated Major Overdrive by あしやひろ &quot;Alice&ldquo; 筐体表面イラスト",
    },
  ],
}

const About: NextPage = () => {
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
        <VStack spacing={4}>
          <Heading as="h1">About</Heading>
          <Heading as="h2" size="sm" fontWeight="normal">
            あしやひろについて
          </Heading>

          <Avatar size="2xl" name="あしやひろ" src="/icon.jpg" />

          <VStack spacing={4} alignItems="left">
            <Box as="section" padding={1}>
              <Heading as="h1" size="sm">
                プロフィール
              </Heading>
              <Text p={2}>
                愛媛県出身、東京都在住。都内某社でWEB開発業務に従事。本業の傍ら、イラストレーターとしても活動中。主には同人活動ですが、商業イラストの依頼も受付可能です。
              </Text>
              <Text p={2}>
                使用言語は
                Python。主にDjangoを使用してサーバーサイドの開発を担当。
              </Text>
              <Text p={2}>
                イラストレーターとしては女子高生イラストを中心にオリジナル作品をメインに創作。
                各種同人イベントにも個人サークルとして参加。
              </Text>
              <Text p={2}>趣味はギター。</Text>
            </Box>
            <ListBox title={awards.title} items={awards.items} />
            <ListBox title={works.title} items={works.items} />
          </VStack>
        </VStack>
      </Container>
    </Layout>
  )
}

export default About
