import { PostCardContainer } from './styles'

import { Link } from 'react-router-dom'

import {
  FaChevronLeft,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa6'

export function PostCard() {
  return (
    <PostCardContainer>
      <div>
        <Link to=".." relative="path">
          <FaChevronLeft /> VOLTAR
        </Link>
        <a
          href="https://github.com/diego3g"
          target="_blank"
          rel="noopener noreferrer"
        >
          VER NO GITHUB <FaArrowUpRightFromSquare />
        </a>
      </div>

      <h1>JavaScript data types and data structures</h1>

      <div className="links">
        <span>
          <FaGithub /> diego3g
        </span>

        <span>
          <FaCalendarDay /> Há 1 dia
        </span>

        <span>
          <FaComment /> 5 comentários
        </span>
      </div>
    </PostCardContainer>
  )
}
