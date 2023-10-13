import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const googleBooksApi = createApi({
  reducerPath: 'googleBooksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1/',
  }),
  endpoints: (builder) => ({
    getGoogleBooks: builder.query({
      query: ({ order, searchTerms, visible }) => {
        return {
          url: `volumes?q=${searchTerms}&maxResults=${visible}&orderBy=${order}&key=${
            import.meta.env.VITE_ACCESS_TOKEN
          }`,
          method: 'GET',
        }
      },
    }),
  }),
})

export const { useGetGoogleBooksQuery } = googleBooksApi
