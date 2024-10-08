import { api } from '../api/Axios'
import { Product } from '../api/ProjectAPITypes'
import { createAppSlice } from './Slice'
import { LoadingState } from './Store'

const productsSlice = createAppSlice({
  name: 'products',
  initialState: {} as Record<string, LoadingState<Product>>,
  reducers: (create) => ({
    allByGroup: create.asyncThunk(
      async (args: { groupId: string }, _thunkApi) => {
        try {
          const response = await api.get(`group/${args.groupId}/products`)
          return response.data.data
        } catch (error) {
          throw error
        }
      },
      {
        pending: (state, action) => {
          state[action.meta.arg.groupId] = {
            items: [],
            item: null,
            status: 'pending',
            error: null,
          }
        },
        fulfilled: (state, action) => {
          state[action.meta.arg.groupId].status = 'succeeded'
          state[action.meta.arg.groupId].items = action.payload
        },
        rejected: (state, action) => {
          state[action.meta.arg.groupId].status = 'rejected'
          state[action.meta.arg.groupId].error =
            action.error.message ?? 'Unknown Error'
        },
      }
    ),
  }),
})

export const { allByGroup } = productsSlice.actions

export default productsSlice.reducer
