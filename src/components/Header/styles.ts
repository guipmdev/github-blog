import styled from 'styled-components'

import { device } from '../../styles/breakpoints'

import coverImage from '../../assets/cover.svg'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  background: center / cover no-repeat url(${coverImage});
  height: 296px;

  img {
    width: 148px;

    margin-bottom: 46px;
  }

  @media ${device.sm} {
    img {
      margin-bottom: 112px;
    }
  }
`
