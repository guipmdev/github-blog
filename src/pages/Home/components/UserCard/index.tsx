import { UserCardContainer, UserInfo, CustomLink } from './styles'

import {
  FaGithub,
  FaBuilding,
  FaUserGroup,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6'

import { useState, useEffect, useCallback } from 'react'

import { api } from '../../../../lib/axios'

import { IconInfos } from '../../../../components/IconInfos'

export interface UserData {
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
  const [username] = useState('diego3g')
  const [userData, setUserData] = useState<UserData>({} as UserData)

  const fetchUserInfo = useCallback(async () => {
    const response = await api.get(`https://api.github.com/users/${username}`)

    setUserData(response.data)
  }, [username])

  useEffect(() => {
    fetchUserInfo()
  }, [fetchUserInfo])

  return (
    <UserCardContainer>
      {!!Object.keys(userData).length && (
        <>
          <img src={userData.avatar_url} alt="" />
          <UserInfo>
            <div>
              <h1>{userData.name}</h1>
              <p>{userData.bio}</p>
            </div>

            <IconInfos
              infos={[
                { name: userData.login, icon: FaGithub },
                ...(userData.company
                  ? [{ name: userData.company, icon: FaBuilding }]
                  : []),
                { name: `${userData.followers} seguidores`, icon: FaUserGroup },
              ]}
            />
          </UserInfo>
          <CustomLink
            to={userData.html_url}
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
