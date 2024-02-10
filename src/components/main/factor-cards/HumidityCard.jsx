import React from 'react';
import FactorCard from '../FactorCard';
import humidity from '../../../assets/FactorIcons/Humidity.svg';
import HorizontalStatusBar from './HorizontalStatusBar';

const HumidityCard = (props) => {
    const MAX_HUM = 100;
    let widthPercentage = (props.humidity / MAX_HUM) * 100
    if(widthPercentage >= 100) {
        widthPercentage = 100;
    }
    return (
        <FactorCard>
            <div className='factor-card-wrapper'>
                <div className='factor-head-2'>
                    <h3 className='factor-head-2__title'>Humidity</h3>
                    <figure className='factor-head-2__figure'>
                        <img src={humidity} alt='humidity-icon' />
                    </figure>
                </div>
                <div className='factor-head-2__status-wrapper'>
                    <p>{props.humidity} %</p>
                    <HorizontalStatusBar width={widthPercentage} />
                </div>
            </div>
        </FactorCard>
    )
}

export default HumidityCard