import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile } from 'utils/media'

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const GridItem = styled.div`
  flex: 0 1 auto;
  height: ${p => (p.small ? rem(70) : rem(140))};
  line-height: ${p => (p.small ? rem(70) : rem(140))};

  vertical-align: middle;
  text-align: center;
  margin: 0 10px;

  ${mobile(css`
    height: ${rem(120)};
    line-height: ${rem(120)};
  `)};
`

export const LogoImage = styled.img`
  max-width: 90%;
  display: inline-block;
  vertical-align: middle;

  ${mobile(css`
    transform: scale(${p => (p.small ? 0.7 : 0.8)});
  `)};
`
