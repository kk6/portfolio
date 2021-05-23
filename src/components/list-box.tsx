import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Heading, Box } from "@chakra-ui/layout"
import { Link, ListItem, UnorderedList, Text } from "@chakra-ui/react"

const data = {
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
