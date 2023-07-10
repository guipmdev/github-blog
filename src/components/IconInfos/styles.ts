import styled, { css } from 'styled-components'

interface IconInfosContainerProps {
  $textColor?: string
}

export const IconInfosContainer = styled.div<IconInfosContainerProps>`
  display: flex;
  gap: 1.5rem;

  ${(props) =>
    props.$textColor &&
    css`
      color: ${props.theme[props.$textColor]};
    `}

  svg {
    color: ${(props) => props.theme['base-label']};
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
