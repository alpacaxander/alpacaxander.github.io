import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './ProductSlice'
import AuthenticationSlice from './AuthenticationSlice'

const store = configureStore({
  reducer: {
    auth: AuthenticationSlice,
    products: ProductSlice,
  },
})

export type IRootState = ReturnType<typeof store.getState>

export default store
