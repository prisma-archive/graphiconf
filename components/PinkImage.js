import styled, { css } from 'styled-components'

// Local
import { bgLightPink } from '../utils/colors'
import { mobile } from '../utils/media'
import RetinaImage from './RetinaImage'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const pinkWidth = 45
const Pink = styled.div`
  flex: 0 0 auto;
  order: ${p => (p.pinkAlign === 'start' ? `-1` : `1`)};
  width: ${pinkWidth}px;
  height: 280px;
  background: url('/static/pink.png');
`

const ImageWrapper = styled.div`
  img {
    display: block;
  }
`

export const Bg = styled.div`
  position: absolute;

  width: ${p => p.width || `calc(100% - 75px)`};
  height: 100%;
  background: ${bgLightPink};

  top: 0;
  bottom: 0;
  right: ${p => p.right};
  left: ${p => p.left};

  ${mobile(css`
    display: none;
  `)};
`

const Image = ({ src, retina = true, pinkAlign, wrapperProps, ...props }) => (
  <Wrapper {...wrapperProps}>
    <ImageWrapper>
      <RetinaImage src={src} retina={retina} {...props} />
    </ImageWrapper>
    <Pink pinkAlign={pinkAlign} />
  </Wrapper>
)

export default {
  Bg,
  Image,
}
