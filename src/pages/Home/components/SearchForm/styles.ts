import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  div {
    display: flex;
    justify-content: space-between;

    margin-bottom: 0.75rem;
  }

  h3 {
    font: ${(props) => props.theme['title-s']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font: ${(props) => props.theme['text-s']};
    color: ${(props) => props.theme['base-span']};
  }

  input {
    background: ${(props) => props.theme['base-input']};
    width: 100%;

    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border-color: ${(props) => props.theme['brand-blue']};
    }
  }
`
