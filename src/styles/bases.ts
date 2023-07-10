import styled from 'styled-components'

export const CardBase = styled.div`
  display: flex;

  background: ${(props) => props.theme['base-profile']};

  padding: 2rem 2.5rem;
  border-radius: 10px;
  margin: -88px auto 4.5rem;

  box-shadow: 0 2px 28px 0 rgba(0 0 0 / 20%);
`
