import React from 'react';

const PercentageSlider = ({onChange, value}) => {
    return (
        <div>
            <input type="range" value={value} onChange={(e) => onChange(e)}/>
            <span>Slider Value is: {value}</span>
        </div>
    )
}

export default PercentageSlider;