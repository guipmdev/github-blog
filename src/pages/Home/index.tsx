import { HomeContainer, Posts } from './styles'

import { useContext } from 'react'

import { PostsContext } from '../../contexts/PostsContext'

import { UserCard } from './components/UserCard'
import { SearchForm } from './components/SearchForm'
import { Loading } from '../../components/Loading'
import { PostItem } from './components/PostItem'

export function Home() {
  const { posts, isFetchingPosts } = useContext(PostsContext)

  return (
    <HomeContainer>
      <UserCard />

      <section>
        <SearchForm />

        {isFetchingPosts ? (
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
