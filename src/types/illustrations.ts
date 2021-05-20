import { ContentsResponse, ContentResponse } from "./api"
import { ImageResponse } from "./image"

export type IllustrationsResponse = ContentsResponse<IllustrationResponse>

export type IllustrationResponse = ContentResponse<{
  title: string
  image: ImageResponse
  postedAt: string
}>
