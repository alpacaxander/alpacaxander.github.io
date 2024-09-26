import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './ProductSlice'
import AuthenticationSlice from './AuthenticationSlice'
import GroupSlice from './GroupSlice'

const store = configureStore({
  reducer: {
    auth: AuthenticationSlice,
    products: ProductSlice,
    groups: GroupSlice,
  },
})

export type IRootState = ReturnType<typeof store.getState>

export default store
