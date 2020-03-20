export interface AuthState {
  token: string | null
  isLoggedIn: boolean
}

export interface DataProps {
  rates?: any
  base?: string
  date?: string
}

export interface GeneralState {
  isLoading: boolean
  data: DataProps | object
  selectedDate: object
  searchInput: ''
}

export interface RootState {
  general: GeneralState
  auth: AuthState
}
