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
      {infos.map((info) => {
        const { name, icon: Icon } = info

        return (
          <div key={Icon.name}>
            <Icon />
            <p>{name}</p>
          </div>
        )
      })}
    </IconInfosContainer>
  )
}
