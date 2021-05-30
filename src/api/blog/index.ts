import { ContentsQuery } from "../../types/api"
import { BlogsResponse } from "../../types/blog"

export type Methods = {
  get: {
    query?: ContentsQuery
    resBody: BlogsResponse
  }
}
