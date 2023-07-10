import styled from 'styled-components'

import { CardBase } from '../../../../styles/bases'

export const UserCardContainer = styled(CardBase)`
  position: relative;

  gap: 2rem;

  img {
    width: 148px;

    border-radius: 8px;
  }

  a {
    position: absolute;
    top: 2.5rem;
    right: 2rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    border-bottom: 1px solid transparent;

    font: ${(props) => props.theme['component-link']};
    color: ${(props) => props.theme['brand-blue']};
    text-decoration: none;

    &:hover {
      border-bottom-color: ${(props) => props.theme['brand-blue']};
    }
  }
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
