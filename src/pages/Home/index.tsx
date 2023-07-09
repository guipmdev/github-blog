import {
  HomeContainer,
  UserCard,
  BlogFeed,
  SearchForm,
  Articles,
} from './styles'

import {
  FaGithub,
  FaBuilding,
  FaUserGroup,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6'

export function Home() {
  return (
    <HomeContainer>
      <UserCard>
        <img src="https://github.com/diego3g.png" alt="" />

        <div>
          <div className="user-info">
            <h2>Cameron Williamson</h2>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </div>

          <div className="links">
            <span>
              <FaGithub /> diego3g
            </span>

            <span>
              <FaBuilding /> Rocketseat
            </span>

            <span>
              <FaUserGroup /> 32 seguidores
            </span>
          </div>
        </div>

        <a href="https://github.com/diego3g">
          GITHUB <FaArrowUpRightFromSquare />
        </a>
      </UserCard>

      <BlogFeed>
        <SearchForm />
        <Articles />
      </BlogFeed>
    </HomeContainer>
  )
}
