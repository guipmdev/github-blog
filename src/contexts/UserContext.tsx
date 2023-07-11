import {
  createContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from 'react'

import { api } from '../lib/axios'

export interface User {
  login: string
  id: number
  avatar_url: string
  html_url: string
  name?: string
  company?: string
  bio?: string
  followers: number
}

interface UserContextType {
  user: User
  fetchUser: () => Promise<void>
}

export const UserContext = createContext({} as UserContextType)

interface UserProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  const desiredUser = `guipmdev`

  const [user, setUser] = useState<User>({} as User)

  const fetchUser = useCallback(async () => {
    const response = await api.get(`/users/${desiredUser}`)

    setUser(response.data)
  }, [desiredUser])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <UserContext.Provider value={{ user, fetchUser }}>
      {children}
    </UserContext.Provider>
  )
}
