import { PostContainer, CustomReactMarkdownPreview } from './styles'

import { useState, useCallback, useEffect } from 'react'

import remarkGfm from 'remark-gfm'
import remarkEmoji from 'remark-emoji'

import { useParams } from 'react-router-dom'

import { Post as PostType } from '../../contexts/PostsContext'

import { api } from '../../lib/axios'

import { PostCard } from './components/PostCard'
import { Loading } from '../../components/Loading'

export function Post() {
  const [postData, setPostData] = useState<PostType>({} as PostType)
  const [markdown, setMarkdown] = useState('')

  const { owner, repo, id } = useParams()

  const fetchPost = useCallback(async () => {
    const response = await api.get(`/repos/${owner}/${repo}/issues/${id}`)

    setPostData(response.data)
    setMarkdown(response.data.body)
  }, [owner, repo, id])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <PostContainer>
      <PostCard postData={postData} />

      {markdown.length === 0 ? (
        <Loading />
      ) : (
        <CustomReactMarkdownPreview
          source={markdown}
          remarkPlugins={[remarkGfm, remarkEmoji]}
          wrapperElement={{
            'data-color-mode': 'dark',
          }}
        />
      )}
    </PostContainer>
  )
}
