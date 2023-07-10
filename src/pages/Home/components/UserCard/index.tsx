import { UserCardContainer, UserInfo, CustomLink } from './styles'

import {
  FaGithub,
  FaBuilding,
  FaUserGroup,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6'

import { IconInfos } from '../../../../components/IconInfos'
import { useEffect, useState } from 'react'

interface UserInfo {
  login: string
  id: number
  avatar_url: string
  html_url: string
  name?: string
  company?: string
  bio?: string
  followers: number
}

export function UserCard() {
  const [username, setUsername] = useState('guipmdev')
  const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUserInfo(data))
  }, [username])

  return (
    <UserCardContainer>
      <img src={userInfo.avatar_url} alt="" />

      <UserInfo>
        <div>
          <h1>{userInfo.name}</h1>
          <p>{userInfo.bio}</p>
        </div>

        <IconInfos
          infos={[
            { name: userInfo.login, icon: FaGithub },
            ...(userInfo.company
              ? [{ name: userInfo.company, icon: FaBuilding }]
              : []),
            { name: `${userInfo.followers} seguidores`, icon: FaUserGroup },
          ]}
        />
      </UserInfo>

      <CustomLink
        to={userInfo.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        GITHUB <FaArrowUpRightFromSquare />
      </CustomLink>
    </UserCardContainer>
  )
}
