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
import { SubmitHandler, useForm } from "react-hook-form"

type ContactFormProps = {
  url: string
  requestHeaders: HeadersInit
}

type FormValues = {
  email: string
  name: string
  body: string
}

const handleErrors = async (response: Response) => {
  if (!response.ok) {
    if (response.status === 429) {
      throw Error(
        "現在フォームが利用できません。お手数ですがメールにてお問い合わせ下さい。"
      )
    }
    return response.json().then((err) => {
      throw Error(err.message)
    })
  }
  return response.json()
}

export const ContactForm: React.FC<ContactFormProps> = ({
  url,
  requestHeaders,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isSubmitted },
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    return new Promise((resolve) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: requestHeaders,
      })
        .then(handleErrors)
        .then((json) => {
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
          <Input
            type="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <FormErrorMessage>
            {errors.email?.type === "required" && "必須項目です"}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="name" isInvalid={errors.name !== undefined}>
          <FormLabel htmlFor="name">お名前</FormLabel>
          <Input type="text" {...register("name", { required: true })} />
          <FormErrorMessage>
            {errors.name?.type === "required" && "必須項目です"}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="body" isInvalid={errors.body !== undefined}>
          <FormLabel htmlFor="body">お問い合わせ内容</FormLabel>
          <Textarea
            placeholder="お仕事のご依頼の場合はなるべく詳細にお書きください。"
            {...register("body", { required: true })}
          />
          <FormErrorMessage>
            {errors.body?.type === "required" && "必須項目です"}
          </FormErrorMessage>
        </FormControl>
        <ButtonGroup>
          <Button
            type="submit"
            isLoading={isSubmitting}
            disabled={!isDirty || isSubmitted}
            colorScheme="purple"
          >
            送信
          </Button>
        </ButtonGroup>
      </VStack>
    </form>
  )
}
