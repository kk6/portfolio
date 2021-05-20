import { ContentQuery } from "../../../types/api"
import { IllustrationResponse } from "../../../types/illustrations"

export type Methods = {
  get: {
    query?: ContentQuery
    resBody: IllustrationResponse
  }
}
