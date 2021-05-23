import { Flex, SimpleGrid, Avatar, Heading, Text, Link } from "@chakra-ui/react"
import NextLink from "next/link"
import React from "react"

export const Hero: React.FC = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
      <Flex justifyContent="center" alignItems="center">
        <Avatar size="2xl" name="あしやひろ" src="/icon.jpg" />
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
          詳細なプロフィールは
          <Link color="blue.500" textDecoration="underline">
            <NextLink href="/about">こちら</NextLink>
          </Link>
        </Text>
      </Flex>
    </SimpleGrid>
  )
}
