import styled from 'styled-components'

// Local
import { bgLightPink } from '../utils/colors'

const FantasticImg = () => (
  <Wrapper>
    <Bg />
  </Wrapper>
)

export default FantasticImg

const Wrapper = styled.div`
  flex: 1 1 auto;
`
const Bg = styled.div`
  width: calc(100% - 75px);
  height: 100%;
  background: ${bgLightPink};
`
