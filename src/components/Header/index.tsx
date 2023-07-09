import { HeaderContainer } from './styles'

import githubBlogLogo from '../../assets/github_blog-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={githubBlogLogo} alt="" />
    </HeaderContainer>
  )
}
