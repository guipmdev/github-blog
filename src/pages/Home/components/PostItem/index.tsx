import { PostItemContainer } from './styles'

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

  return (
    <PostItemContainer>
      <Link to={postURL}>
        <div>
          <h3>{postData.title}</h3>
          <span>{publishingDateDistanceFromNow}</span>
        </div>

        <p>{postData.body}</p>
      </Link>
    </PostItemContainer>
  )
}
