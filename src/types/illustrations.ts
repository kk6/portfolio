import { ContentResponse,ContentsResponse } from "./api"
import { TextField } from "./fields"
import { ImageResponse } from "./image"

export type IllustrationsResponse = ContentsResponse<IllustrationResponse>

export type IllustrationResponse = ContentResponse<{
  title: TextField
  image: ImageResponse
  postedAt: string
}>
