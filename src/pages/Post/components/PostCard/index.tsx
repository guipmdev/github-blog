import { PostCardContainer, CustomLink } from './styles'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import {
  FaChevronLeft,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa6'

import { Post } from '../../../../contexts/PostsContext'

import { IconInfos } from '../../../../components/IconInfos'
import { Loading } from '../../../../components/Loading'

interface PostCardProps {
  isFetchingPost: boolean
  postData: Post
}

export function PostCard({ isFetchingPost, postData }: PostCardProps) {
  const hasPostData = Object.keys(postData).length

  if (isFetchingPost || (!isFetchingPost && !hasPostData)) {
    return (
      <PostCardContainer>
        <Loading />
      </PostCardContainer>
    )
  }

  const publishingDateDistanceFromNow = formatDistanceToNow(
    new Date(postData.created_at),
    {
      locale: ptBR,
      addSuffix: true,
    },
  )

  return (
    <PostCardContainer>
      <div className="navigation">
        <CustomLink to=".." relative="path">
          <FaChevronLeft /> VOLTAR
        </CustomLink>

        <CustomLink
          to={postData.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          VER NO GITHUB <FaArrowUpRightFromSquare />
        </CustomLink>
      </div>

      <div className="post-info">
        <h1>{postData.title}</h1>

        <IconInfos
          infos={[
            { name: postData.user.login, icon: FaGithub },
            { name: publishingDateDistanceFromNow, icon: FaCalendarDay },
            { name: `${postData.comments} comentários`, icon: FaComment },
          ]}
          $textColor="base-span"
        />
      </div>
    </PostCardContainer>
  )
}
