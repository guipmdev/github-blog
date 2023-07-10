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
  const { user } = useContext(UserContext)

  return (
    <UserCardContainer>
      {!user ? (
        <Loading />
      ) : (
        <>
          <img src={user.avatar_url} alt="" />
          <UserInfo>
            <div>
              <h1>{user.name}</h1>
              <p>{user.bio}</p>
            </div>

            <IconInfos
              infos={[
                { name: user.login, icon: FaGithub },
                ...(user.company
                  ? [{ name: user.company, icon: FaBuilding }]
                  : []),
                { name: `${user.followers} seguidores`, icon: FaUserGroup },
              ]}
            />
          </UserInfo>
          <CustomLink
            to={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB <FaArrowUpRightFromSquare />
          </CustomLink>
        </>
      )}
    </UserCardContainer>
  )
}
