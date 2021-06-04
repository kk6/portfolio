import { ArrowRightIcon } from "@chakra-ui/icons"
import { Flex, Heading, Link,SimpleGrid, Text } from "@chakra-ui/react"
import NextLink from "next/link"

import { Avatar } from "../components/avatar"

export const Hero: React.FC = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
      <Flex justifyContent="center" alignItems="center">
        <Avatar src="/icon.webp" alt="あしやひろ" width={128} height={128} />
      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, lg: 20 }}
        py={24}
      >
        <Heading>あしやひろ</Heading>
        <Text p={2}>Web Application Developer / Illustrator</Text>
        <Text p={2}>
          愛媛県出身、東京都在住。都内某社でWEB開発業務に従事。本業の傍ら、イラストレーターとしても活動中。主には同人活動ですが、商業イラストの依頼も受付可能です。
        </Text>
        <Text p={2}>
          <NextLink href="/about" passHref>
            <Link color="purple.500">
              <b>
                詳細なプロフィールを見る{" "}
                <ArrowRightIcon w={3} verticalAlign="middle" />
              </b>
            </Link>
          </NextLink>
        </Text>
      </Flex>
    </SimpleGrid>
  )
}
