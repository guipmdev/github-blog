import { UserCardContainer, UserInfo, CustomLink } from './styles'

import {
  FaGithub,
  FaBuilding,
  FaUserGroup,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6'

import { IconInfos } from '../../../../components/IconInfos'

export function UserCard() {
  return (
    <UserCardContainer>
      <img src="https://github.com/diego3g.png" alt="" />

      <UserInfo>
        <div>
          <h1>Cameron Williamson</h1>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </div>

        <IconInfos
          infos={[
            { name: 'diego3g', icon: FaGithub },
            { name: 'Rocketseat', icon: FaBuilding },
            { name: '32 seguidores', icon: FaUserGroup },
          ]}
        />
      </UserInfo>

      <CustomLink
        to="https://github.com/diego3g"
        target="_blank"
        rel="noopener noreferrer"
      >
        GITHUB <FaArrowUpRightFromSquare />
      </CustomLink>
    </UserCardContainer>
  )
}
