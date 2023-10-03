import React from 'react'

const Option = (props) => {
  return (
    <option value={props.index}>{props.label}</option>
  )
}

export default Option