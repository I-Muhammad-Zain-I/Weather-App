import React from 'react'
import Humidity from '../../../assets/FactorIcons/Humidity.svg'
const ParameterDropdown = (props) => {
  const paramChangeHandler = (e) => {
    props.setParamHandler(e.target.value);
  }
  return (
    <div className='para-dropdown'>
      <select id="param" className='para-dropdown__select' name="params" onChange={(e) => paramChangeHandler(e)}>
        <option value={0}>Visibility</option>
        <option value={1}>Humidity</option>
        <option value={2}>Pressure</option>
      </select>
    </div>
  )
}

export default ParameterDropdown