import { Container, Heading, VStack, Text } from "@chakra-ui/layout"
import { Avatar } from "@chakra-ui/react"
import { NextPage } from "next"

import Layout from "../components/layout"

const About: NextPage = () => {
  return (
    <Layout>
      <Container>
        <VStack spacing={4}>
          <Heading as="h1">About</Heading>
          <Heading as="h2" size="sm" fontWeight="normal">
            あしやひろについて
          </Heading>

          <Avatar
            size="2xl"
            name="あしやひろ"
            src="https://pbs.twimg.com/profile_images/1367519282100236291/WaS_iU_r_400x400.jpg"
          />

          <VStack spacing={4} alignItems="left">
            <Text>
              愛媛県出身、東京都在住。都内某社でWEB開発業務に従事。本業の傍ら、イラストレーターとしても活動中。主には同人活動ですが、商業イラストの依頼も受付可能です。
            </Text>
            <Text>
              使用言語は
              Python。主にDjangoを使用してサーバーサイドの開発を担当。
            </Text>
            <Text>
              イラストレーターとしては女子高生イラストを中心にオリジナル作品をメインに創作。
              各種同人イベントにも個人サークルとして参加。
            </Text>
            <Text>趣味はギター。</Text>
          </VStack>
        </VStack>
      </Container>
    </Layout>
  )
}

export default About
