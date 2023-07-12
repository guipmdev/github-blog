import { UserCardContainer, UserInfo, CustomLink } from './styles'

import { useContext } from 'react'

import {
  FaGithub,
  FaBuilding,
  FaUserGroup,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6'

import { UserContext } from '../../../../contexts/UserContext'

import { Loading } from '../../../../components/Loading'
import { IconInfos } from '../../../../components/IconInfos'

export function UserCard() {
  const { user, isFetchingUser } = useContext(UserContext)

  const hasUserData = Object.keys(user).length

  return (
    <UserCardContainer>
      {isFetchingUser || (!isFetchingUser && !hasUserData) ? (
        <Loading />
      ) : (
        <>
          <img src={user.avatar_url} alt="" />

          <UserInfo>
            <div>
              <h1>{user.name}</h1>

              <CustomLink
                to={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB <FaArrowUpRightFromSquare />
              </CustomLink>
            </div>

            <div>
              <p>{user.bio}</p>

              <IconInfos
                infos={[
                  { name: user.login, icon: FaGithub },
                  ...(user.company
                    ? [{ name: user.company.split('@')[1], icon: FaBuilding }]
                    : []),
                  { name: `${user.followers} seguidores`, icon: FaUserGroup },
                ]}
              />
            </div>
          </UserInfo>
        </>
      )}
    </UserCardContainer>
  )
}
