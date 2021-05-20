import { ContentsQuery } from "../../types/api"
import { IllustrationsResponse } from "../../types/illustrations"

export type Methods = {
  get: {
    query?: ContentsQuery
    resBody: IllustrationsResponse
  }
}
