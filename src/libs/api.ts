import { BlogsResponse } from "../types/blog"
import { client } from "../utils/api"

export const getCurrentNews = async (
  fields = "id,title,description,slug,publishedAt",
  limit = 5
): Promise<BlogsResponse> => {
  return await client.blog.$get({
    query: {
      fields: fields,
      limit: limit,
      filters: "category[equals]news",
    },
  })
}
