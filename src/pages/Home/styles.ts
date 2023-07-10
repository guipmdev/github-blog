import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: calc(864px + 1rem);

  padding: 1rem;
  margin: 0 auto;
`

export const Posts = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-bottom: 3rem;

  list-style: none;
`
