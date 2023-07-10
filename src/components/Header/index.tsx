import { HeaderContainer } from './styles'

import { NavLink } from 'react-router-dom'

import githubBlogLogo from '../../assets/github_blog-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={githubBlogLogo} alt="" />
      </NavLink>
    </HeaderContainer>
  )
}
