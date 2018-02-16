import styled from 'styled-components'

import RetinaImage from './RetinaImage'

const FullImage = props => (
  <Wrapper>
    <RetinaImage {...props} />
  </Wrapper>
)

export default FullImage

const Wrapper = styled.div`
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`
