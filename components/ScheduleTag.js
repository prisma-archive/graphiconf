import styled, { css } from 'styled-components'
import React, { Component } from 'react'

import { mobile } from '../utils/media'
import { specialPink, bgLightPink } from '../utils/colors'
import { normalFont, smallFont } from '../utils/sizes'
import RetinaImage from './RetinaImage'

const ScheduleTag = ({ title, bg, color }) => (
  <Wrapper bg={bg} color={color}>
    <Title>{title}</Title>
  </Wrapper>
)

export default ScheduleTag

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  color: ${p => p.color || specialPink};

  border-radius: 5px;
  background: ${p => p.bg || bgLightPink};
  padding: 3px 10px;
  cursor: default;
  user-select: none;
  margin-right: 15px;

  ${mobile(css`
    flex-basis: auto;
    flex-grow: 1;
    margin-bottom: 10px;
  `)};
`

const Title = styled.span`
  font-weight: 600;
  font-size: ${normalFont}px;
`
