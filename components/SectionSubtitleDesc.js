import styled, { css } from 'styled-components'

import rem from '../utils/rem'
import { mobile } from '../utils/media'

const SectionSubtitleDesc = styled.p`
  margin: ${rem(-7)} 0 0 0;
  font-size: ${rem(25)};
  line-height: 1.67;

  ${mobile(css`
    font-size: ${rem(18)};
  `)};
`

export default SectionSubtitleDesc
