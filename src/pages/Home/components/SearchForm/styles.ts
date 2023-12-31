import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  .header-form {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 0.75rem;

    h2 {
      font: ${(props) => props.theme['title-s']};
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      display: inline;

      font: ${(props) => props.theme['text-s']};
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    background: ${(props) => props.theme['base-input']};
    width: 100%;

    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    margin-bottom: 0.5rem;

    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border-color: ${(props) => props.theme['brand-blue']};

      transition: border-color 0.2s;
    }
  }

  .tooltip {
    visibility: hidden;
    opacity: 0;

    height: 100%;
    max-height: 0;

    transition: max-height 0.2s, opacity 0.2s;

    span {
      font: ${(props) => props.theme['text-s']};
      color: ${(props) => props.theme['base-label']};

      code {
        background: ${(props) => props.theme['base-profile']};
        padding: 0.1rem 0.3rem;
        border-radius: 6px;

        font-weight: 700;
      }
    }
  }

  input:focus + .tooltip {
    visibility: visible;
    opacity: 100%;

    max-height: 2rem;
  }
`
