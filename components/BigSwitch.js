import { Fragment } from 'react'
import styled, { css } from 'styled-components'

import { bgLightPink, specialPink } from '../utils/colors'

const BigSwitch = ({ name, items, selected, onChange, ...props }) => (
  <Wrapper {...props}>
    {items.map(itm => {
      const id = `${name}/${itm.value}`
      const itmSelected = itm.value === selected
      const wrapperProps = itm.wrapperProps || {}

      return (
        <Fragment key={id}>
          <Item selected={itmSelected} {...wrapperProps}>
            <Input
              id={id}
              name={name}
              value={itm.value}
              type="radio"
              checked={itmSelected}
              onChange={onChange}
            />
            <Label htmlFor={id} selected={itmSelected}>
              {itm.label}
            </Label>
          </Item>
        </Fragment>
      )
    })}
  </Wrapper>
)

export default BigSwitch

export const height = 50
const radius = height / 2

const Wrapper = styled.div`
  display: flex;
`

const Item = styled.div`
  position: relative;

  &:first-child {
    label {
      margin-right: 0;
      border-radius: ${radius}px 0 0 ${radius}px;
      border-right: ${p => (p.selected ? '1px solid' : '0')};
    }
  }

  &:last-child {
    label {
      border-radius: 0 ${radius}px ${radius}px 0;
      border-left: ${p => (p.selected ? '1px solid' : '0')};
    }
  }
`

const Label = styled.label`
  height: ${height}px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;

  color: #d1d5dc;
  background: #f8f9fb;
  border: 1px solid;
  cursor: pointer;

  transition: border 80ms, box-shadow 80ms, color 80ms, background 80ms;

  ${p =>
    p.selected
      ? css`
          color: ${specialPink};
          background: ${bgLightPink};
        `
      : null};
`

const Input = styled.input`
  opacity: 0;

  &:focus {
    & + label {
      box-shadow: 0 0 0 2px inset;
    }
  }
`
