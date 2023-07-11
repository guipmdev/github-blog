import { ReactNode } from 'react'

import { PostsProvider } from './PostsContext'
import { UserProvider } from './UserContext'

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
