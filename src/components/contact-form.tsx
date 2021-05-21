import { Button } from "@chakra-ui/button"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { VStack } from "@chakra-ui/layout"
import { Textarea } from "@chakra-ui/textarea"
import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  email: string
  name: string
  body: string
}

const HookForm: React.FC = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const email = watch("email")
  const name = watch("name")
  const body = watch("body")

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    return new Promise((resolve) => {
      fetch("https://ashiyahiro.microcms.io/api/v1/contacts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-WRITE-API-KEY": process.env.NEXT_PUBLIC_MICRO_CMS_WRITE_API_KEY,
        },
      })
        .then(() => {
          reset()
          alert("お問い合わせを受け付けました")
        })
        .catch((err) => {
          alert(err)
        })
      resolve("done")
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack minWidth="600px">
        <FormControl id="email">
          <FormLabel htmlFor="email">メールアドレス</FormLabel>
          <Input {...register("email", { required: true })} />
          {errors.email?.type === "required" && "email is required"}
        </FormControl>
        <FormControl id="name">
          <FormLabel htmlFor="email">お名前</FormLabel>
          <Input {...register("name", { required: true })} />
          {errors.name?.type === "required" && "name is required"}
        </FormControl>
        <FormControl id="body">
          <FormLabel htmlFor="email">お問い合わせ内容</FormLabel>
          <Textarea {...register("body", { required: true })} />
          {errors.body?.type === "required" && "body is required"}
        </FormControl>
        <Button type="submit" colorScheme="teal" variant="outline">
          送信
        </Button>
      </VStack>
    </form>
  )
}

export default HookForm
