import { ReactNode } from 'react'

import { UserProvider } from './UserContext'
import { PostsProvider } from './PostsContext'

interface ContextProvidersProps {
  children: ReactNode
}

export function ContextProviders({ children }: ContextProvidersProps) {
  return (
    <UserProvider>
      <PostsProvider>{children}</PostsProvider>
    </UserProvider>
  )
}
