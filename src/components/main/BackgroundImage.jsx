import React from 'react'

import Thunder from '../../assets/backgroundImages/Thunder.webp';
import Fog from '../../assets/backgroundImages/Fog.webp';
import Haze from '../../assets/backgroundImages/Haze.webp';
import Night from '../../assets/backgroundImages/Night-Clear.webp';
import Rain from '../../assets/backgroundImages/Rain.webp';
import Sky from '../../assets/backgroundImages/Sky-Clear.webp';
import Snow from '../../assets/backgroundImages/Snow.webp';
import Clouds from '../../assets/backgroundImages/Clouds.webp'

import './main.css'

const BackgroundImage = (props) => {
    
    let backImage = `url(${Clouds})`;
    let category = props.id[0];

    if (props.id === '721'){
        backImage = `url(${Haze})`;
    }
    else if (props.id.length !== 4) {
        switch(category) {
            case '2':
                backImage = `url(${Thunder})`;
                break;
            case '3': case '5':
                backImage = `url(${Rain})`;
                break;
            case '6':
                backImage = `url(${Snow})`;
                break;
            case '8':
                backImage = `url(${Clouds})`
                break;
            default:
                backImage = `url(${Fog})`;
                break;
        }
    } else {
        // day | night
        backImage = (props.id[props.id.length - 1] === 'd') ? `url(${Sky})` : `url(${Night})`
    }

    const backgroundStyle = {
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0)), linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0)), ${backImage}`,
    }

    return (
        <section 
        className={'weather-card'} style={backgroundStyle}>
            {props.children}
        </section>
    )
}

export default BackgroundImage