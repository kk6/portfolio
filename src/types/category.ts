import { ContentResponse, ContentsResponse } from "./api"
import { TextField } from "./fields"

export type CategoriesResponse = ContentsResponse<CategoryResponse>

export type CategoryResponse = ContentResponse<{
  name: TextField
}>
