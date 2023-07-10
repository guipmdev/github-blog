import styled from 'styled-components'

export const UserCardContainer = styled.div`
  position: relative;

  display: flex;
  gap: 2rem;

  background: ${(props) => props.theme['base-profile']};

  padding: 2rem 2.5rem;
  border-radius: 10px;
  margin: -88px auto 4.5rem;

  box-shadow: 0 2px 28px 0 rgba(0 0 0 / 20%);

  img {
    width: 148px;

    border-radius: 8px;
  }

  a {
    position: absolute;
    top: 2.5rem;
    right: 2rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    border-bottom: 1px solid transparent;

    font: ${(props) => props.theme['component-link']};
    color: ${(props) => props.theme['brand-blue']};
    text-decoration: none;

    &:hover {
      border-bottom-color: ${(props) => props.theme['brand-blue']};
    }
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    margin-bottom: 0.5rem;

    font: ${(props) => props.theme['title-l']};
    color: ${(props) => props.theme['base-title']};
  }

  .links {
    display: flex;
    gap: 1.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`
