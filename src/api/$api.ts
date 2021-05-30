/* eslint-disable */
// prettier-ignore
import { AspidaClient, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './blog'
// prettier-ignore
import { Methods as Methods1 } from './illustrations'
// prettier-ignore
import { Methods as Methods2 } from './illustrations/_id@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/blog'
  const PATH1 = '/illustrations'
  const GET = 'GET'

  return {
    blog: {
      get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    illustrations: {
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
            fetch<Methods2['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
            fetch<Methods2['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json(),
      $get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
