import React from 'react';
import Option from './Option';

const DayDropdown = (props) => {

    const dayDropdownChangeHandler = (e) => {
        console.log(e.target.value);
        props.setDayHandler(e.target.value || 0);
    }


    return (
        <div className='day-dropdown'>
            <select id="dayDrop" className='day-dropdown__select' name="dayDrop" onChange={(e) => dayDropdownChangeHandler(e)}>
                {props.optionList.map((option, index) => (
                    <Option key={index} label={option} index={index}/>
                ))}
            </select>
        </div>
    );
}
// <Option> [date] </option>
export default DayDropdown