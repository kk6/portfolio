import { Container, VStack } from "@chakra-ui/layout"
import {
  Textarea,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react"
import { NextPage } from "next"
import Layout from "../components/layout"

const Contact: NextPage = () => {
  return (
    <Layout>
      <Container centerContent>
        <VStack>
          <FormControl id="email">
            <FormLabel>メールアドレス</FormLabel>
            <Input type="email" />
            <FormHelperText>ヘルプテキスト</FormHelperText>
          </FormControl>
          <FormControl id="name">
            <FormLabel>お名前</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="body">
            <FormLabel>お問い合わせ内容</FormLabel>
            <Textarea placeholder="お問い合わせ内容を入力してください" />
          </FormControl>
          <Button colorScheme="teal" variant="outline">
            Button
          </Button>
        </VStack>
      </Container>
    </Layout>
  )
}

export default Contact
