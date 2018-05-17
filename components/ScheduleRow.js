import styled, { css } from 'styled-components'
import AnimateHeight from 'react-animate-height'
import React, { Component } from 'react'

import { mobile } from '../utils/media'
import { specialPink, bgLightPink } from '../utils/colors'
import { normalFont, smallFont } from '../utils/sizes'
import RetinaImage from './RetinaImage'

class ScheduleRow extends Component {
  state = {
    expended: false,
  }

  toggle = () => {
    this.setState(prev => ({
      expended: !prev.expended,
    }))
  }

  render(props) {
    const {
      time = '8:30 - 9:30',
      title = 'Check-in and Coffee',
      description = "Don't be late",
      images = [
        {
          src: [],
        },
      ],
      abstract,
      bg,
      color,
      ...rest
    } = this.props
    const { expended } = this.state

    return (
      <Wrapper
        {...rest}
        color={color}
        collapse={Boolean(abstract)}
        expended={expended}
      >
        <Time>{time}</Time>
        <PinkBox bg={bg} onClick={this.toggle}>
          <Stack>
            <ImagesWrapper>
              {renderImagesFromArray(images, color)}
            </ImagesWrapper>
            <TextsWrapper>
              <Title>{title}</Title>
              <Desc>{description}</Desc>
            </TextsWrapper>
          </Stack>
          {abstract && (
            <AnimateHeight duration={250} height={expended ? 0 : 'auto'}>
              <Abstract>{abstract}</Abstract>
            </AnimateHeight>
          )}
        </PinkBox>
      </Wrapper>
    )
  }
}

export default ScheduleRow

const renderImagesFromArray = (images, color) =>
  images.map((img, i) => {
    if (img.icon) {
      const { icon, ...restImg } = img
      return (
        <IconWrapper color={color} key={i}>
          <RetinaImage {...restImg} />
        </IconWrapper>
      )
    } else if (img.src) {
      return (
        <ImageWrapper key={i}>
          <RetinaImage {...img} />
        </ImageWrapper>
      )
    }

    return null
  })

//////// STYLES
const height = 75

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  color: ${p => p.color || specialPink};
  margin-bottom: ${p => p.marginBottom || 16}px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  ${mobile(css`
    flex-direction: column;
    align-items: stretch;
  `)};

  ${p =>
    p.collapse &&
    css`
      :after {
        content: '🔼';
        position: absolute;
        top: 10px;
        right: 10px;
        opacity: 0.5;

        transform: rotate(${p.expended ? 0 : 180.1}deg);
      }
    `};
`

const Time = styled.div`
  flex: 0 0 130px;
  font-size: 18px;
  font-variant-numeric: tabular-nums;
  color: #afafaf;

  ${mobile(css`
    margin-bottom: 8px;
    margin-top: 8px;
    flex-basis: auto;
  `)};
`

const PinkBox = styled.div`
  flex: 1 1 auto;

  border-left: 3px solid;
  border-radius: 5px;
  background: ${p => p.bg || bgLightPink};
`

const Stack = styled.div`
  min-height: ${height}px;
  padding: 10px 0;

  display: flex;
  align-items: center;
`

const ImagesWrapper = styled.div`
  flex: 0 0 auto;
  margin-left: 20px;
  min-width: 60px;
  line-height: 1;
`

const IconWrapper = styled.div`
  margin-right: 7px;
  vertical-align: middle;
  width: 45px;
  text-align: center;
  svg {
    path {
      fill: ${p => p.color || 'unset'};
      stroke: ${p => p.color || 'unset'};
    }
  }

  &:last-child {
    margin-right: 0;
  }
`

const ImageWrapper = IconWrapper.extend`
  display: inline-block;
  vertical-align: middle;
  border-radius: 45px;
  width: 45px;
  height: 45px;
  overflow: hidden;

  img {
    display: inline-block;
    width: 45px;
    height: 45px;
  }
`

const TextsWrapper = styled.div`
  flex: 1 0 auto;
  margin-left: 14px;
  padding-right: 20px;
`

const Title = styled.h3`
  padding: 0;
  margin: 0;
  font-weight: 600;
  font-size: ${normalFont}px;
`

const Desc = styled.p`
  padding: 0;
  margin: 3px 0 0 0;
  color: currentColor;
  opacity: 0.8;
  font-size: ${smallFont}px;
`

const Abstract = styled.div`
  width: 100%;
  padding: 0px 20px 15px;
  font-size: ${smallFont}px;
  color: currentColor;
`
