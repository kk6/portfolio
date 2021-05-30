import { ContentQuery } from "../../../types/api"
import { BlogResponse } from "../../../types/blog"

export type Methods = {
  get: {
    query?: ContentQuery
    resBody: BlogResponse
  }
}
