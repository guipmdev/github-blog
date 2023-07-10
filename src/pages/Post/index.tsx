import { PostContainer, CustomReactMarkdownPreview } from './styles'

import { useState, useCallback, useEffect } from 'react'

import remarkGfm from 'remark-gfm'
import remarkEmoji from 'remark-emoji'

import { Navigate } from 'react-router-dom'

import { api } from '../../lib/axios'

import { UserData } from '../Home/components/UserCard'
import { PostCard } from './components/PostCard'

export interface PostData {
  id: string
  html_url: string
  title: string
  body: string
  comments: number
  user: UserData
  created_at: string
}

export function Post() {
  const [postData, setPostData] = useState<PostData>({} as PostData)
  const [markdown, setMarkdown] = useState('')

  const fetchPost = useCallback(async () => {
    const response = await api.get(
      '/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1 ',
    )

    setPostData(response.data)
    setMarkdown(response.data.body)
  }, [])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <PostContainer>
      <PostCard postData={postData} />

      <CustomReactMarkdownPreview
        source={markdown}
        remarkPlugins={[remarkGfm, remarkEmoji]}
        wrapperElement={{
          'data-color-mode': 'dark',
        }}
      />
    </PostContainer>
  )
}
