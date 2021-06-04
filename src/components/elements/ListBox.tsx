import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, Heading } from "@chakra-ui/layout"
import { Link, ListItem, Text, UnorderedList } from "@chakra-ui/react"

type TItem = {
  url: string
  title: string
}
type ListBoxProps = {
  title: string
  items: TItem[]
}

export const ListBox: React.FC<ListBoxProps> = ({ title, items }) => {
  return (
    <Box as="section" padding={1}>
      <Heading as="h1" size="sm">
        {title}
      </Heading>
      <UnorderedList p={2}>
        {items.map((item) => (
          <ListItem key={item.title}>
            {item.url ? (
              <Link href={item.url} isExternal>
                {item.title} <ExternalLinkIcon mx="2px" />
              </Link>
            ) : (
              <Text>{item.title}</Text>
            )}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}
