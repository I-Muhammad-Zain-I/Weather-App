import React from 'react'

const FactorCard = (props) => {
  return (
    <div className='factor-card'>
      {props.children}
    </div>
  )
}

export default FactorCard