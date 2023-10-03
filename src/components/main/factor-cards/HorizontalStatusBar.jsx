import React from 'react'


/**
 * TODO:
 * Take orientation in props: Vertical OR Horizontal
 * Take Label 1, 2, 3 for status
 */

const HorizontalStatusBar = (props) => {


    return (
        <section className='status-horizontal'>
            {/* // Outer Div */}
            <div className='status-horizontal__outer'>
                {/* Inner Fill */}
                <div className='status-horizontal__inner' style={{width: `${props.width}%`}}>
          
                </div>
            </div>
            <div className='status-horizontal__measures'>
                <p>Bad</p>
                <p>Normal</p>
                <p>Good</p>
            </div>
        </section>
  )
}

export default HorizontalStatusBar