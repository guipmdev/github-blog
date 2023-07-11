import styled from 'styled-components'

import { CardBase, CustomLinkBase } from '../../../../styles/bases'

import { device } from '../../../../styles/breakpoints'

export const UserCardContainer = styled(CardBase)`
  align-items: center;
  gap: 2rem;

  min-height: 212px;

  margin-bottom: 4.5rem;

  img {
    background: ${(props) => props.theme['base-border']};
    height: 148px;
    min-width: 148px;

    border-radius: 8px;
  }

  @media ${device.sm} {
    flex-direction: column;

    img {
      margin-top: -66px;
    }
  }
`

export const CustomLink = styled(CustomLinkBase)``

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  overflow: hidden;

  & > div {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }

  & > div:last-of-type {
    flex-direction: column;
    flex: 1;
    gap: 1.5rem;
  }

  h1 {
    font: ${(props) => props.theme['title-l']};
    color: ${(props) => props.theme['base-title']};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media ${device.sm} {
    & > div {
      flex-direction: column-reverse;
      align-items: center;
    }

    p {
      text-align: center;
    }
  }
`
