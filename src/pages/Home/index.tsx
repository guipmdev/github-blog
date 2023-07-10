import { HomeContainer, BlogFeed, SearchForm, Articles } from './styles'

import { UserCard } from './components/UserCard'

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
