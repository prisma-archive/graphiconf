import styled, { css } from 'styled-components'
import isRetina from 'is-retina'

// Local
import { bgLightPink } from '../utils/colors'
import { mobile } from '../utils/media'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Pink = styled.div`
  flex: 0 0 auto;
  width: 45px;
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
  right: 0;
  top: 0;
  bottom: 0;

  width: calc(100% - 75px);
  height: 100%;
  background: ${bgLightPink};

  ${mobile(css`
    display: none;
  `)};
`

const Image = ({ src, retina = true, wrapperProps, ...props }) => (
  <Wrapper {...wrapperProps}>
    <ImageWrapper>
      {retina ? (
        isRetina() ? (
          <img src={src[1] || src} {...props} />
        ) : (
          <img src={src[0] || src} {...props} />
        )
      ) : (
        <img src={src} {...props} />
      )}
    </ImageWrapper>
    <Pink />
  </Wrapper>
)

export default {
  Bg,
  Image,
}
