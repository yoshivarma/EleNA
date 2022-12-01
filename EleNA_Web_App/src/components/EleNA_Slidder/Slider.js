import React from 'react';
import {useState} from "react";

// function Slider(){

//     var slider = document.getElementById("myRange");
//     var output = document.getElementById("demo");
//     output.innerHTML = slider.value;
//     slider.oninput = function() {
//     output.innerHTML = this.value;
    
// }
// return(
//     <div class="slidecontainer">
//     <input type="range" min="1" max="100" value = {this.value} class="slider" id="myRange" onChange={this.handleChange}/>
//     <p>Value: <span id="demo"></span></p>
//     </div>
// );
// }
// export default Slider;

const PercentageSlider = () => {
    const [percentageValue, setPercentageValue] = useState(50)
    return (
        <div>
            {/* <Typography classes={{ container: classes.labelText1}}>100 %</Typography> */}
            <input type="range" value={percentageValue} onChange={(e) => setPercentageValue(e.target.valueAsNumber)}/>
            <span>Slider Value is: {percentageValue}</span>
        </div>
    )
}

export default PercentageSlider;