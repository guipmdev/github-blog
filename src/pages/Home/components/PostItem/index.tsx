import { PostItemContainer } from './styles'

import { Link } from 'react-router-dom'

import { Post } from '../../../../contexts/PostsContext'

interface PostItemProps {
  postData: Post
}

export function PostItem({ postData }: PostItemProps) {
  return (
    <PostItemContainer>
      <Link to="/post/1">
        <div>
          <h3>{postData.title}</h3>
          <span>{postData.created_at}</span>
        </div>

        <p>{postData.body}</p>
      </Link>
    </PostItemContainer>
  )
}
