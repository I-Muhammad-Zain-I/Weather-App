import React from 'react'
import FactorCard from '../FactorCard'

import visibility from '../../../assets/FactorIcons/visibility.svg'
import HorizontalStatusBar from './HorizontalStatusBar'
const VisibilityCard = (props) => {
  const MAX_VIS = 25;
  let widthPercentage = (props.visibility / MAX_VIS) * 100
  if (widthPercentage >= 100) {
    widthPercentage = 100;
  }
  return (
    <FactorCard>
      <div className='factor-card-wrapper'>
        <div className='factor-head-2'>
          <h3 className='factor-head-2__title'>Visibility</h3>
          <figure className='factor-head-2__figure'>
            <img src={visibility} alt='visibility-icon' />
          </figure>
        </div>
        <div className='factor-head-2__status-wrapper'>
          <p>{props.visibility} Km</p>
          <HorizontalStatusBar width={widthPercentage} />
        </div>
      </div>
    </FactorCard>
  )
}

export default VisibilityCard