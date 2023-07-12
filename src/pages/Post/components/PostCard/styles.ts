import styled from 'styled-components'

import { CardBase, CustomLinkBase } from '../../../../styles/bases'

import { device } from '../../../../styles/breakpoints'

export const PostCardContainer = styled(CardBase)`
  flex-direction: column;
  gap: 1.25rem;

  min-height: 168px;

  .navigation {
    display: flex;
    justify-content: space-between;
  }

  .post-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h1 {
      font: ${(props) => props.theme['title-l']};
      color: ${(props) => props.theme.title};
    }
  }

  @media ${device.sm} {
    .post-info {
      align-items: center;

      text-align: center;
    }
  }
`

export const CustomLink = styled(CustomLinkBase).withConfig({
  shouldForwardProp: (prop) => !!prop,
})``
