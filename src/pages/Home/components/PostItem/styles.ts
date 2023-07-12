import styled from 'styled-components'

export const PostItemContainer = styled.li`
  background: ${(props) => props.theme['base-post']};
  min-width: 0;
  min-height: 260px;

  border: 2px solid transparent;
  border-radius: 10px;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};

    transition: 0.2s border-color;
  }

  a {
    all: unset;

    display: block;

    height: calc(100% - 4rem);

    padding: 2rem;

    cursor: pointer;
  }

  p {
    display: -webkit-box;
    overflow: hidden;

    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`

export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  margin-bottom: 1.25rem;

  h3 {
    display: -webkit-box;
    overflow: hidden;

    font: ${(props) => props.theme['title-m']};
    color: ${(props) => props.theme['base-title']};
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  span {
    font: ${(props) => props.theme['text-s']};
    color: ${(props) => props.theme['base-span']};
    white-space: nowrap;
  }
`
