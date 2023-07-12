import { PostContainer, PostContent } from './styles'

import { useState, useCallback, useEffect } from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import { toast } from 'react-hot-toast'

import ReactMarkdownPreview from '@uiw/react-markdown-preview'
import remarkGfm from 'remark-gfm'
import remarkEmoji from 'remark-emoji'

import { Post as PostType } from '../../contexts/PostsContext'

import { api } from '../../lib/axios'

import { PostCard } from './components/PostCard'
import { Loading } from '../../components/Loading'

export function Post() {
  const [postData, setPostData] = useState<PostType>({} as PostType)
  const [isFetchingPost, setIsFetchingPost] = useState(true)

  const { owner, repo, id } = useParams()

  const navigate = useNavigate()

  const fetchPost = useCallback(async () => {
    setIsFetchingPost(true)

    await api
      .get(`/repos/${owner}/${repo}/issues/${id}`)
      .then((response) => {
        setPostData(response.data)
      })
      .catch(async () => {
        toast.error('Falha ao obter esse post.')

        await new Promise((resolve) => setTimeout(resolve, 3000))

        navigate('/')
      })

    setIsFetchingPost(false)
  }, [owner, repo, id, navigate])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <PostContainer>
      <PostCard isFetchingPost={isFetchingPost} postData={postData} />

      <PostContent>
        {isFetchingPost ? (
          <Loading />
        ) : (
          <ReactMarkdownPreview
            source={postData.body}
            remarkPlugins={[remarkGfm, remarkEmoji]}
            wrapperElement={{
              'data-color-mode': 'dark',
            }}
          />
        )}
      </PostContent>
    </PostContainer>
  )
}
