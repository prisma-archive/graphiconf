import styled from 'styled-components'

import rem from '../utils/rem'
import { bgLightPink, specialRed } from '../utils/colors'
import Container from '../components/Container'
import chevronRight from '../static/icons/chevron-right.svg'

const TopBanner = ({ children, bullet, ...props }) => (
  <Banner {...props}>
    <FlexContainer>
      { bullet && <Bullet>{bullet}</Bullet>}
      <Text>{children}</Text>
      <Arrow src={chevronRight} />
    </FlexContainer>
  </Banner>
)

export default TopBanner

const Arrow = styled.img`
  transition: margin 100ms ease-out;
  display: block;
  height: ${rem(18)};
  width: auto;
  margin-left: ${rem(10)};
`

const Banner = styled.a`
  display: block;
  padding: ${rem(12)} 0;
  width: 100%;
  background: ${bgLightPink};
  color: ${specialRed};

  font-size: ${rem(16)};
  text-decoration: none;

  &:hover ${Arrow} { margin-left: ${rem(16)}; }
`

const FlexContainer = Container.extend`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Bullet = styled.div`
  padding: 2px 6px;
  margin-right: ${rem(16)};
  background: ${specialRed};
  border-radius: 99px;

  text-transform: uppercase;
  white-space: nowrap;
  font-size: ${rem(12)};
  font-weight: 600;
  color: white;
`

const Text = styled.div``