import styled from 'styled-components'

import { CardBase } from '../../../../styles/bases'

export const PostCardContainer = styled(CardBase)`
  flex-direction: column;

  .navigation {
    margin-bottom: 1.25rem;
  }

  h1 {
    margin-bottom: 0.5rem;

    font: ${(props) => props.theme['title-l']};
    color: ${(props) => props.theme.title};
  }
`
