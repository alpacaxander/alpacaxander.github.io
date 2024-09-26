export interface GroupState {
  items: any[]
  status: 'idle' | 'pending' | 'succeeded' | 'rejected'
  error: string | null
}

export interface Group {
  type: 'group'
  id: string
  attributes: {
    commonName: string
    description: string
  }
  relationships: {
    products: {
      data: any[]
    }
  }
}
