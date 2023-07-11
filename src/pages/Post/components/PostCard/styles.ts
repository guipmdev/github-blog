import styled from 'styled-components'

import { CardBase, CustomLinkBase } from '../../../../styles/bases'

export const PostCardContainer = styled(CardBase)`
  flex-direction: column;

  width: 100%;
  min-height: 168px;

  .navigation {
    display: flex;
    justify-content: space-between;

    margin-bottom: 1.25rem;
  }

  h1 {
    margin-bottom: 0.5rem;

    font: ${(props) => props.theme['title-l']};
    color: ${(props) => props.theme.title};
  }
`

export const CustomLink = styled(CustomLinkBase).withConfig({
  shouldForwardProp: (prop) => !!prop,
})``
