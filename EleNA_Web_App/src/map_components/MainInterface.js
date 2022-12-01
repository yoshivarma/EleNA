import React from 'react';
import MapDisplay from './MapDisplay';
import SampleTextBox from './SampleInterface';
import './MainInterface.css';

class MainInterface extends React.Component {
    render() {
        return <div className="content-container">
        <div className="row">
            <div className="MapDisplay">
                <MapDisplay />
            </div>
            <div className="SampleTextBox">
                <SampleTextBox />
            </div>
       </div>
    </div>
    }
}

export default MainInterface;