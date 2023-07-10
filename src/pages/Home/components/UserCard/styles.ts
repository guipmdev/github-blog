import styled from 'styled-components'

import { CardBase, CustomLinkBase } from '../../../../styles/bases'

export const UserCardContainer = styled(CardBase)`
  position: relative;

  min-height: 212px;

  gap: 2rem;

  margin-bottom: 4.5rem;

  img {
    background: ${(props) => props.theme['base-border']};
    height: 148px;
    min-width: 148px;

    border-radius: 8px;
  }
`

export const CustomLink = styled(CustomLinkBase)`
  position: absolute;
  top: 2.5rem;
  right: 2rem;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    margin-bottom: 0.5rem;

    font: ${(props) => props.theme['title-l']};
    color: ${(props) => props.theme['base-title']};
  }
`
