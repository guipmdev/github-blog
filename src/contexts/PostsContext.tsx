import {
  createContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from 'react'

import { User } from './UserContext'

import { api } from '../lib/axios'

export interface Post {
  id: string
  html_url: string
  title: string
  body: string
  comments: number
  user: User
  created_at: string
}

export interface SearchPostsPayload {
  repo?: string
  query?: string
}

interface PostsContextType {
  posts: Post[]
  fetchPosts: ({ repo, query }?: SearchPostsPayload) => Promise<void>
}

export const PostsContext = createContext({} as PostsContextType)

interface PostsProviderProps {
  children: ReactNode
}

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = useCallback(async (payload: SearchPostsPayload = {}) => {
    const defaultQuery = `repo:guipmdev/github-blog-desafio-react`

    const query = payload.query ? payload.query : ''
    const repo = payload.repo ? `repo:${payload.repo}` : ''

    const completeQuery = query + repo

    const response = await api.get(`/search/issues`, {
      params: {
        q: completeQuery.length ? completeQuery : defaultQuery,
      },
    })

    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
