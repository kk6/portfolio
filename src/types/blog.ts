import { ContentsResponse, ContentResponse } from "./api"
import { CategoryResponse } from "./category"
import { RichEdit, TextField } from "./fields"
import { ImageResponse } from "./image"

export type BlogsResponse = ContentsResponse<BlogResponse>

export type BlogResponse = ContentResponse<{
  title: TextField
  body: RichEdit
  category: CategoryResponse
  ogimage?: ImageResponse
  description?: TextField
  related_blog?: BlogResponse[]
  slug: TextField
}>
