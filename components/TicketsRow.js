import styled, { css } from 'styled-components'

import rem from '../utils/rem'
import { mobile } from '../utils/media'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin-top: ${rem(55)};

  ${mobile(css`
    margin-top: ${rem(35)};
  `)};
`

const Item = styled.div`
  flex: 1;
  margin-right: ${rem(30)};

  &:last-child {
    margin-right: 0;
  }

  ${mobile(css`
    flex: 1 1 auto;
    width: 100%;
    margin-right: 0;
    margin-bottom: ${rem(25)};

    &:last-child {
      margin-bottom: 0;
    }
  `)};
`

export default {
  Row,
  Item,
}
