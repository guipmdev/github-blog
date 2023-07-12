import {
  createContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from 'react'

import { toast } from 'react-hot-toast'

import { User } from './UserContext'

import { api } from '../lib/axios'

export interface Post {
  id: string
  html_url: string
  number: number
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
  isFetchingPosts: boolean
  fetchPosts: (payload?: SearchPostsPayload) => Promise<void>
}

export const PostsContext = createContext({} as PostsContextType)

interface PostsProviderProps {
  children: ReactNode
}

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [isFetchingPosts, setIsFetchingPosts] = useState(true)

  const fetchPosts = useCallback(async (payload: SearchPostsPayload = {}) => {
    setIsFetchingPosts(true)

    const defaultQuery = `repo:guipmdev/github-blog-desafio-react`

    let query = ''
    if (payload.query && payload.query.length > 0) query = payload.query

    let repo = ''
    if (payload.repo && payload.repo.length > 0) repo = `repo:${payload.repo}`

    const completeQuery = query + repo

    await api
      .get(`/search/issues`, {
        params: {
          q: completeQuery.length > 0 ? completeQuery : defaultQuery,
        },
      })
      .then((response) => {
        setPosts(response.data.items)
      })
      .catch(() => {
        toast.error('Falha ao obter os posts.')
      })

    setIsFetchingPosts(false)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ posts, isFetchingPosts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
