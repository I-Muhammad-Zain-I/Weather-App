import React from 'react'
import FactorCard from '../FactorCard'
import pressure from '../../../assets/FactorIcons/Pressure.svg'
import VerticalStatusBar from './VerticalStatusBar'
const PressureCard = (props) => {
  return (
    <FactorCard>
            <div className='factor-head-1'>
                <div className='factor-head-1__title'>
                    <h3 className='factor-head-1__title-head'>Pressure</h3>
                    <figure className='factor-head-1__figure'>
                        <img src={pressure} alt='pressure-icon' />
                    </figure>
                </div>
                {/* Grid For Better Alignment & UX*/}
                <div className='factor-head-1__factor-info'>
                    <p className='factor-info__name'>Sea Level</p>
                    <p className='factor-info__value'>{props.pressure} HPA</p>
                </div>
            </div>
            <div className='status-bar-wrapper'>
            <VerticalStatusBar pressure={props.pressure}/>
            </div>
      
    </FactorCard>
  )
}

export default PressureCard