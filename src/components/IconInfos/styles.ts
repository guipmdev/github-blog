import styled, { css } from 'styled-components'

import { device } from '../../styles/breakpoints'

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

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    overflow: hidden;

    svg {
      min-width: fit-content;

      color: ${(props) => props.theme['base-label']};
    }

    p {
      overflow: hidden;

      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  @media ${device.sm} {
    align-items: center;
  }

  @media ${device.xs} {
    flex-direction: column;
    gap: 0.75rem;
  }
`
