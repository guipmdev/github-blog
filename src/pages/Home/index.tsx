import {
  HomeContainer,
  UserCard,
  BlogFeed,
  SearchForm,
  Articles,
} from './styles'

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
