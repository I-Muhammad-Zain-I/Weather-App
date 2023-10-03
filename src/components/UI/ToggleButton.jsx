import React from 'react'
import './toggle.css'
import { useContext } from 'react'
import UnitContext from '../../context/UnitContext'
const ToggleButton = () => {
    const {unit:{unit}, setUnit} = useContext(UnitContext);

    const ToggleUnitHandler = () => {
        console.log('triggered')
        setUnit((unit) => {
            if(unit.unit == 'metric') return {unit: 'imperial', unitSymbol: 'F'} 
            else  return {unit: 'metric', unitSymbol: 'C'}
        })
    }

    return (
        <label className="switch">
            <input type="checkbox" onClick={ToggleUnitHandler}/>
            <span className="slider round"></span>
        </label>
    )
}

export default ToggleButton