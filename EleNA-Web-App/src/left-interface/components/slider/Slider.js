import React from 'react';

const Slider = ({onChange, value}) => {
    return (
        <div>
            <input type="range" className="form-range" value={value} onChange={(e) => onChange(e)}/>
            <span>Percentage Increase: {value}</span>
        </div>
    )
}

export default Slider;