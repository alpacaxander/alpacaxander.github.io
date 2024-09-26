import { useAuth0 } from '@auth0/auth0-react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../api/Axios'

export const fetchToken = createAsyncThunk(
  'authentication/token',
  async (arg, thinkApi) => {
    const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()
    try {
      if (isAuthenticated && user) {
        const response = await getAccessTokenSilently({
          authorizationParams: {
            audience: 'https://localhost:8080',
          },
        })
        return response
      }
    } catch (error) {
      throw error
    }
  }
)

interface AuthState {
  status: 'idle' | 'pending' | 'succeeded' | 'rejected'
  token: string | null
  error: string | null
}

const authenticationSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'idle',
    token: null,
  } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, (state) => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.token = action.payload || null
        api.defaults.headers.common['Authorization'] = `Bearer ${state.token}`
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message ?? 'Unknown Error'
      })
  },
})

export default authenticationSlice.reducer
