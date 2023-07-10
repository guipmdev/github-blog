import { HomeContainer, Posts } from './styles'

import { UserCard } from './components/UserCard'
import { SearchForm } from './components/SearchForm'
import { PostItem } from './components/PostItem'

export function Home() {
  return (
    <HomeContainer>
      <UserCard />

      <section>
        <SearchForm />

        <Posts>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </Posts>
      </section>
    </HomeContainer>
  )
}
