import React, { useState } from "react";

const templateFunction = (unit, value) => {
    if(unit == 'metric') return `${value} °C`;
    else if(unit == 'imperial') return `${value} °F`
}

const initialContextObject = {
    unit: 'metric',
    unitSymbol: 'C',
};

const UnitContext = React.createContext({
        unit: {},
        setUnit: () => {},
        templateFunction
    });

export const UnitContextProvider = (props) => {
    const [unit, setUnit] = useState(initialContextObject);
    return (
        <UnitContext.Provider
        value={{unit, setUnit,templateFunction}}
        >
        {props.children}
        </UnitContext.Provider>
    )
   

}

export default UnitContext;