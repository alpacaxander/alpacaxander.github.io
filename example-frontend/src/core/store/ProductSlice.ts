import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../app/Axios'

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (arg, thunkApi) => {
    try {
      const response = await api.get('group/com.yahoo.elide/products')
      return response.data
    } catch (error) {
      throw error
    }
  }
)

interface ProductsState {
  items: any[]
  status: 'idle' | 'pending' | 'succeeded' | 'rejected'
  error: string | null
}

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  } as ProductsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message ?? 'Unknown Error'
      })
  },
})

export default productSlice.reducer
