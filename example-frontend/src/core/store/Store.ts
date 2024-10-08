import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './ProductSlice'
import AuthenticationSlice from './AuthenticationSlice'
import GroupSlice from './GroupSlice'
import { ResourceObject } from '../api/JsonAPITypes'

const store = configureStore({
  reducer: {
    auth: AuthenticationSlice,
    products: ProductSlice,
    groups: GroupSlice,
  },
})

export type LoadingState<R extends ResourceObject> = {
  items: R[]
  item?: R | null
  status: 'idle' | 'pending' | 'succeeded' | 'rejected'
  error?: string | null
}
export type IRootState = ReturnType<typeof store.getState>

export default store
