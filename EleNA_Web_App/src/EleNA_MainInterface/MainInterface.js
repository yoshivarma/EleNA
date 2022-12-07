import React from 'react';
import MapDisplay from '../map_components/MapDisplay';
import LeftForm from '../components/EleNA_Left_Interface.js/LeftInterface';
import './MainInterface.css';

class MainInterface extends React.Component {
    render() {
        return(
        <div className="row bg-light">
            <div className="col-4">
                <LeftForm/> 
            </div>
            <div className="col-8">
                <MapDisplay/>
            </div>
        </div>
        );
    }
}

export default MainInterface;