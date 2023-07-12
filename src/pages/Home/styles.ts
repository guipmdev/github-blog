import styled from 'styled-components'

import { device } from '../../styles/breakpoints'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;

  max-width: calc(${(props) => props.theme['max-width']} + 1rem);

  padding: 1rem;
  margin: 0 auto;

  & > section {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`

export const Posts = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  padding-bottom: 3rem;

  list-style: none;

  @media ${device.sm} {
    grid-template-columns: 1fr;
  }
`
