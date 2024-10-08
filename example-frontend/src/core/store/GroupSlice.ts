import { api } from '../api/Axios'
import { Group } from '../api/ProjectAPITypes'
import { createAppSlice } from './Slice'
import { LoadingState } from './Store'

const groupSlice = createAppSlice({
  name: 'groups',
  initialState: {
    items: [],
    item: null,
    status: 'idle',
    error: null,
  } as LoadingState<Group>,
  reducers: (create) => ({
    all: create.asyncThunk(
      async (args: any, thunkApi) => {
        try {
          const response = await api.get('group')
          return response.data.data
        } catch (error) {
          throw error
        }
      },
      {
        pending: (state) => {
          state.status = 'pending'
          state.error = null
        },
        fulfilled: (state, action) => {
          state.status = 'succeeded'
          state.items = action.payload
        },
        rejected: (state, action) => {
          state.status = 'rejected'
          state.error = action.error.message ?? 'Unknown Error'
        },
      }
    ),
    one: create.asyncThunk(
      async (args: { id: string }, thunkApi) => {
        try {
          const response = await api.get(`group/${args.id}`)
          return response.data.data
        } catch (error) {
          throw error
        }
      },
      {
        pending: (state) => {
          state.status = 'pending'
          state.error = null
        },
        fulfilled: (state, action) => {
          state.status = 'succeeded'
          state.item = action.payload
        },
        rejected: (state, action) => {
          state.status = 'rejected'
          state.error = action.error.message ?? 'Unknown Error'
        },
      }
    ),
  }),
})

export const { all, one } = groupSlice.actions

export default groupSlice.reducer
