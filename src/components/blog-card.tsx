import { Box, Flex } from "@chakra-ui/layout"
import { Heading,Text } from "@chakra-ui/react"
import Link from "next/link"
import { BsFolder } from "react-icons/bs"

import styles from "../../styles/blog-card.module.css"
import { formatDate } from "../utils/date"

type BlogCardProps = {
  id: string
  title: string
  description: string
  postedAt: string
  category: string
}

export const BlogCard: React.FC<BlogCardProps> = (props) => {
  return (
    <Box display={{ md: "flex" }}>
      <Box
        p={{ base: 0, md: 2 }}
        w={{ base: "100%", md: "20%" }}
        display={{ base: "flex", md: "block" }}
      >
        <Text fontSize="sm" p={2}>
          {formatDate(props.postedAt)}
        </Text>
        <Flex alignItems="center" ml={4}>
          <BsFolder />
          <Text fontSize="sm" p={2}>
            {props.category}
          </Text>
        </Flex>
      </Box>
      <Box
        p={{ base: 0, md: 2 }}
        w={{ base: "100%", md: "80%" }}
        h={{ base: "7.5rem", md: "8rem" }}
        overflow="hidden"
      >
        <Heading size="md" p={2}>
          <Link href={`/blog/${props.id}`}>{props.title}</Link>
        </Heading>
        <Text p={2} className={styles.text}>
          {props.description}
        </Text>
      </Box>
    </Box>
  )
}
