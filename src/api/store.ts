import { configureStore } from '@reduxjs/toolkit'
import { googleBooksApi } from './api'

export const store = configureStore({
  reducer: {
    [googleBooksApi.reducerPath]: googleBooksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(googleBooksApi.middleware),
})
