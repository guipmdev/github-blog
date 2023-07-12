import { IconInfosContainer } from './styles'

import { IconType } from 'react-icons'

interface Info {
  name: string
  icon: IconType
}

interface IconInfosProps {
  infos: Info[]
  $textColor?: string
}

export function IconInfos({ infos, $textColor }: IconInfosProps) {
  return (
    <IconInfosContainer $textColor={$textColor}>
      {infos.map(({ name, icon: Icon }) => {
        const key = Icon.name + name

        return (
          <div key={key}>
            <Icon />
            <p>{name}</p>
          </div>
        )
      })}
    </IconInfosContainer>
  )
}
