import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const CardBase = styled.div`
  display: flex;

  background: ${(props) => props.theme['base-profile']};
  width: 100%;

  padding: 2rem 2.5rem;
  border-radius: 10px;
  margin: -88px auto 0;

  box-shadow: 0 2px 28px 0 rgba(0 0 0 / 20%);
`

export const CustomLinkBase = styled(Link)`
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
`
