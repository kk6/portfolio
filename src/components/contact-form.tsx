import { Button, ButtonGroup } from "@chakra-ui/button"
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { VStack } from "@chakra-ui/layout"
import { Textarea } from "@chakra-ui/textarea"
import Router from "next/router"
import { SubmitHandler,useForm } from "react-hook-form"

const post_url = "https://ashiyahiro.microcms.io/api/v1/contacts"
type FormValues = {
  email: string
  name: string
  body: string
}

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  const requestHeaders: HeadersInit = new Headers()
  requestHeaders.set("Accept", "application/json")
  requestHeaders.set("Content-Type", "application/json")
  requestHeaders.set(
    "X-WRITE-API-KEY",
    process.env.NEXT_PUBLIC_MICRO_CMS_WRITE_API_KEY || ""
  )

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    return new Promise((resolve) => {
      fetch(post_url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: requestHeaders,
      })
        .then(() => {
          alert("お問い合わせを受け付けました")
          Router.reload()
        })
        .catch((err) => {
          alert(err)
        })
      resolve("done")
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack width="60vw">
        <FormControl id="email" isInvalid={errors.email !== undefined}>
          <FormLabel htmlFor="email">メールアドレス</FormLabel>
          <Input type="email" {...register("email", { required: true })} />
          <FormErrorMessage>
            {errors.email?.type === "required" && "必須項目です"}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="name" isInvalid={errors.name !== undefined}>
          <FormLabel htmlFor="email">お名前</FormLabel>
          <Input type="text" {...register("name", { required: true })} />
          <FormErrorMessage>
            {errors.name?.type === "required" && "必須項目です"}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="body" isInvalid={errors.body !== undefined}>
          <FormLabel htmlFor="email">お問い合わせ内容</FormLabel>
          <Textarea
            placeholder="お仕事のご依頼の場合はなるべく詳細にお書きください。"
            {...register("body", { required: true })}
          />
          <FormErrorMessage>
            {errors.body?.type === "required" && "必須項目です"}
          </FormErrorMessage>
        </FormControl>
        <ButtonGroup>
          <Button type="submit" isLoading={isSubmitting} colorScheme="purple">
            送信
          </Button>
        </ButtonGroup>
      </VStack>
    </form>
  )
}
