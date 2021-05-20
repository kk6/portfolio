import { Container, Heading, VStack, Text } from "@chakra-ui/layout"
import { Avatar } from "@chakra-ui/react"
import { NextPage } from "next"

import Layout from "../components/layout"

const About: NextPage = () => {
  return (
    <Layout>
      <Container centerContent>
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

          <VStack spacing={4}>
            <Text>
              <b>あしやひろ</b>
              と申します。普段はWeb開発のお仕事をしながら余暇時間にイラストレーターとして活動しています。
            </Text>
            <Text>
              仕事では主に Python
              を書いています。PythonでDjangoな会社で働いています。リモートなのでほとんど会社に行くことはないですが、会社が今年から歩いていける距離になったけれど…。
            </Text>
            <Text>
              イラストは女子高生を中心に女の子キャラを描くことが多いです。二次創作も描きたいものたくさんあるけれど、今はあまり時間が取れてません。
            </Text>
            <Text>
              趣味は絵を描くことはもちろんのこと、ギターを弾くのも好きです。これは完全に趣味ではあるんですが、ご縁もあって
              Animal Pedals 様の Major Overdrive
              のカスタムイラスト仕様を担当させていただいたりなんかもしました。
              ちなみに所有ギターは Washburn
              N4、Epiphoneのレスポール、Edwardsのストラトです。アンプはYamahaのTHR10を長らく愛用していたんですが、最近購入したMarshall
              DSL1cが1ワットながらフルチューブだけあってめちゃめちゃいい音するので最近はもっぱらコイツで音出してます。
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Layout>
  )
}

export default About
