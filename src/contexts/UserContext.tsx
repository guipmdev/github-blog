import {
  createContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from 'react'

import { api } from '../lib/axios'

import { toast } from 'react-hot-toast'

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
  isFetchingUser: boolean
  fetchUser: () => Promise<void>
}

export const UserContext = createContext({} as UserContextType)

interface UserProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  const defaultUser = 'guipmdev'

  const [user, setUser] = useState<User>({} as User)
  const [isFetchingUser, setIsFetchingUser] = useState(true)

  const fetchUser = useCallback(async () => {
    setIsFetchingUser(true)

    await api
      .get(`/users/${defaultUser}`)
      .then((response) => {
        setUser(response.data)
      })
      .catch(() => {
        toast.error('Falha ao obter o usuário.')
      })

    setIsFetchingUser(false)
  }, [defaultUser])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <UserContext.Provider value={{ user, fetchUser, isFetchingUser }}>
      {children}
    </UserContext.Provider>
  )
}
