import React from 'react'


/**
 * TODO:
 * Take orientation in props: Vertical OR Horizontal
 * Take Label 1, 2, 3 for status
 */


const VerticalStatusBar = (props) => {

  const MAX_PRESSURE = 1085;
  let innerFillHeight = (props.pressure / MAX_PRESSURE) * 100;


  return (
    <section className='status-vertical'>
      {/* // Outer Div */}
      <div className='status-vertical__outer'>
        {/* Inner Fill */}
        <div className='status-vertical__inner' style={{ height: innerFillHeight }}>

        </div>
      </div>
      <div className='status-vertical__measures'>
        <p>High</p>
        <p>Normal</p>
        <p>low</p>
      </div>
    </section>
  )
}

export default VerticalStatusBar