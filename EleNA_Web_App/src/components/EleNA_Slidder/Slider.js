import React from 'react';

const PercentageSlider = ({onChange, value}) => {
    return (
        <div>
            <input type="range" className="form-range" cursor= "pointer" cursor-color= "black" value={value} onChange={(e) => onChange(e)}/>
            <span>Percentage Increase: {value}</span>
        </div>
    )
}

export default PercentageSlider;