import styled, { css } from 'styled-components'

import rem from '../utils/rem'
import { mobile } from '../utils/media'

const centerColumn = 1140
const sidePadding = 25

const TwinsContainer = ({
  fullWidthOnMobile,
  reverseOnMobile,
  startWidth,
  endWidth,
  renderStart = () => {},
  renderEnd = () => {},
}) => {
  const [first, second] = calcWidths(startWidth, endWidth, centerColumn)
  const halfDiff = (first - second) / 2

  return (
    <Wrapper fullWidthOnMobile={fullWidthOnMobile}>
      <Twin halfDiff={halfDiff} justifyContent="flex-end">
        {renderStart(contentCreator('left', first))}
      </Twin>
      <Twin
        halfDiff={halfDiff}
        width={second}
        justifyContent="flex-start"
        reverseOnMobile={reverseOnMobile}
        isEnd={true}
      >
        {renderEnd(contentCreator('right', second, fullWidthOnMobile))}
      </Twin>
    </Wrapper>
  )
}

export default TwinsContainer

const contentCreator = (paddingPosition, width, fullWidthOnMobile) => props => (
  <TwinContent
    paddingPosition={paddingPosition}
    width={width}
    fullWidthOnMobile={fullWidthOnMobile}
    {...props}
  />
)

const calcWidths = (first, second, sum) => {
  if (first) {
    return [first, sum - first]
  } else if (second) {
    return [sum - second, second]
  }

  return [sum / 2, sum / 2] // default
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  ${mobile(css`
    flex-direction: ${p => (p.fullWidthOnMobile ? 'column' : 'row')};
  `)};
`

const Twin = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: auto;
  width: calc(50% ${p => (p.isEnd ? `-` : `+`)} ${p => rem(p.halfDiff)});
  position: relative;
  display: flex;
  justify-content: ${p => p.justifyContent};

  @media (max-width: ${rem(centerColumn)}) {
    flex: 1 1 auto;
    width: auto;
  }

  ${mobile(css`
    order: ${p => (p.isEnd && p.reverseOnMobile ? `-1` : `1`)};
  `)};
`

export const TwinContent = styled.div`
  width: ${p => (p.width ? rem(p.width) : 'auto')};

  @media (max-width: ${rem(centerColumn + sidePadding * 2)}) {
    width: auto;
    box-sizing: content-box;

    ${p =>
      p.paddingPosition === 'left'
        ? css`
            padding-left: ${rem(sidePadding)};
          `
        : p.paddingPosition === 'right'
          ? css`
              padding-right: ${rem(sidePadding)};
            `
          : null};
  }

  ${mobile(css`
    width: ${p => (p.fullWidthOnMobile ? '100%' : 'auto')};
    padding-right: ${p => (p.fullWidthOnMobile ? rem(sidePadding) : undefined)};
    padding-left: ${p => (p.fullWidthOnMobile ? rem(sidePadding) : undefined)};
  `)};
`
