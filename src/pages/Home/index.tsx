import { HomeContainer, Posts } from './styles'

import { useContext } from 'react'

import { PostsContext } from '../../contexts/PostsContext'

import { UserCard } from './components/UserCard'
import { SearchForm } from './components/SearchForm'
import { PostItem } from './components/PostItem'

export function Home() {
  const { posts } = useContext(PostsContext)

  return (
    <HomeContainer>
      <UserCard />

      <section>
        <SearchForm />

        <Posts>
          {posts.map((post) => (
            <PostItem key={post.id} postData={post} />
          ))}
        </Posts>
      </section>
    </HomeContainer>
  )
}
