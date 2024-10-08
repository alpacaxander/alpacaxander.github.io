import { Group } from '../api/ProjectAPITypes'

export interface GroupState {
  items: Group[]
  status: 'idle' | 'pending' | 'succeeded' | 'rejected'
  error: string | null
}
