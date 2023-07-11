import { PostCardContainer, CustomLink } from './styles'

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
  postData: Post
}

export function PostCard({ postData }: PostCardProps) {
  return (
    <PostCardContainer>
      {!Object.keys(postData).length ? (
        <Loading />
      ) : (
        <>
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

          <h1>{postData.title}</h1>

          <IconInfos
            infos={[
              { name: postData.user.login, icon: FaGithub },
              { name: postData.created_at, icon: FaCalendarDay },
              { name: `${postData.comments} comentários`, icon: FaComment },
            ]}
            $textColor="base-span"
          />
        </>
      )}
    </PostCardContainer>
  )
}
