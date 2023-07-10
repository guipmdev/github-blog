import { HomeContainer, BlogFeed, Articles } from './styles'

import { UserCard } from './components/UserCard'
import { SearchForm } from './components/SearchForm'

export function Home() {
  return (
    <HomeContainer>
      <UserCard />

      <BlogFeed>
        <SearchForm />
        <Articles />
      </BlogFeed>
    </HomeContainer>
  )
}
