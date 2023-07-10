import { PostCardContainer, CustomLink } from './styles'

import {
  FaChevronLeft,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa6'

import { IconInfos } from '../../../../components/IconInfos'

export function PostCard() {
  return (
    <PostCardContainer>
      <div className="navigation">
        <CustomLink to=".." relative="path">
          <FaChevronLeft /> VOLTAR
        </CustomLink>
        <CustomLink
          to="https://github.com/diego3g"
          target="_blank"
          rel="noopener noreferrer"
        >
          VER NO GITHUB <FaArrowUpRightFromSquare />
        </CustomLink>
      </div>

      <h1>JavaScript data types and data structures</h1>

      <IconInfos
        infos={[
          { name: 'diego3g', icon: FaGithub },
          { name: 'Há 1 dia', icon: FaCalendarDay },
          { name: '5 comentários', icon: FaComment },
        ]}
        $textColor="base-span"
      />
    </PostCardContainer>
  )
}
