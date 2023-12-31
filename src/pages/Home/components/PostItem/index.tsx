import { PostItemContainer, PostInfo } from './styles'

import { Link } from 'react-router-dom'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Post } from '../../../../contexts/PostsContext'

interface PostItemProps {
  postData: Post
}

export function PostItem({ postData }: PostItemProps) {
  const publishingDateDistanceFromNow = formatDistanceToNow(
    new Date(postData.created_at),
    {
      locale: ptBR,
      addSuffix: true,
    },
  )

  const baseURL = 'https://github.com/'

  const postURL = postData.html_url
    .substring(baseURL.length)
    .replace('/issues/', '/post/')
    .replace('/pull/', '/post/')

  return (
    <PostItemContainer>
      <Link to={postURL}>
        <PostInfo>
          <h3>{postData.title}</h3>
          <span>{publishingDateDistanceFromNow}</span>
        </PostInfo>

        <p>{postData.body}</p>
      </Link>
    </PostItemContainer>
  )
}
