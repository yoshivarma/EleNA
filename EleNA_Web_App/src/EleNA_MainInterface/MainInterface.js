import React from 'react';
import MapDisplay from '../map_components/MapDisplay';
import LeftForm from '../components/EleNA_Left_Interface.js/LeftInterface';
import './MainInterface.css';
import PercentageSlider from '../components/EleNA_Slidder/Slider.js';
import Toggle from '../components/EleNA_Toggle/Toggle';
//import { withStyles } from '@material-ui/core/styles';
//import CssBaseline from '@material-ui/core/CssBaseline';

class MainInterface extends React.Component {
    render() {
        return(
        <div class= "Cotainer">      
            <div class="Left_Form"> 
                <LeftForm/> 
            </div>
            <div class="MapDisplay">
                <MapDisplay/>
            </div>
        </div>
        );
    }
}

export default MainInterface;