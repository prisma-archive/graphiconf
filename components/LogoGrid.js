import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile } from 'utils/media'

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 60px;
  align-items: center;
`

export const GridItem = styled.div`
  flex: 0 1 auto;
  height: ${p =>
    p.height ? rem(p.height) : p.tiny ? rem(40) : p.small ? rem(70) : rem(90)};
  line-height: ${p =>
    p.height ? rem(p.height) : p.tiny ? rem(40) : p.small ? rem(70) : rem(90)};
  max-height: ${p => p.maxHeight};

  vertical-align: middle;
  text-align: center;
  margin: 0 ${p => (p.tiny ? 10 : p.small ? 35 : 45)}px;
  margin-bottom: ${p => (p.tiny ? 30 : p.small ? 60 : 90)}px;

  img {
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  ${mobile(css`
    height: ${p =>
      p.heightOnMobile
        ? rem(p.heightOnMobile)
        : p.tiny ? rem(45) : p.small ? rem(55) : rem(60)};
    line-height: ${p =>
      p.heightOnMobile
        ? rem(p.heightOnMobile)
        : p.tiny ? rem(45) : p.small ? rem(55) : rem(60)};
  `)};
`

export const LogoImage = styled.img`
  display: inline-block;
  vertical-align: middle;

  ${mobile(css`
    transform: scale(${p => (p.small ? 0.7 : 0.8)});
  `)};
`
