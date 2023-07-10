import styled from 'styled-components'

export const PostItemContainer = styled.li`
  background: ${(props) => props.theme['base-post']};

  padding: 2rem;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    margin-bottom: 1.25rem;
  }

  h3 {
    font: ${(props) => props.theme['title-m']};
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font: ${(props) => props.theme['text-s']};
    color: ${(props) => props.theme['base-span']};
    white-space: nowrap;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
