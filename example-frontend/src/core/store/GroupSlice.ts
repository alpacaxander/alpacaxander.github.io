import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../api/Axios'
import { GroupState } from '../models/Group'
import { useSelector } from 'react-redux'

export const fetchGroups = createAsyncThunk(
  'groups/fetchAll',
  async (_arg, _thunkApi) => {
    try {
      const response = await api.get('group')
      return response.data.data
    } catch (error) {
      throw error
    }
  }
)

const groupSlice = createSlice({
  name: 'groups',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  } as GroupState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroups.pending, (state) => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(fetchGroups.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchGroups.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message ?? 'Unknown Error'
      })
  },
})

export default groupSlice.reducer
