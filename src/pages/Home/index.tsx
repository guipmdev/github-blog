import { HomeContainer, Posts } from './styles'

import { useContext, useState } from 'react'

import { PostsContext } from '../../contexts/PostsContext'

import { UserCard } from './components/UserCard'
import { SearchForm } from './components/SearchForm'
import { Loading } from '../../components/Loading'
import { PostItem } from './components/PostItem'

export function Home() {
  const { posts } = useContext(PostsContext)

  const [isSearching, setIsSearching] = useState(false)

  function updateIsSearchingStatus(newStatus: boolean) {
    setIsSearching(newStatus)
  }

  return (
    <HomeContainer>
      <UserCard />

      <section>
        <SearchForm updateIsSearchingStatus={updateIsSearchingStatus} />

        {isSearching ? (
          <Loading />
        ) : (
          <Posts>
            {posts.map((post) => (
              <PostItem key={post.id} postData={post} />
            ))}
          </Posts>
        )}
      </section>
    </HomeContainer>
  )
}
