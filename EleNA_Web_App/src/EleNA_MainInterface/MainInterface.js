import React from 'react';
import MapDisplay from '../map_components/MapDisplay';
import LeftForm from '../components/EleNA_Left_Interface.js/LeftInterface';
import './MainInterface.css';

class MainInterface extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            route: []
        }

        this.updateRoute = this.updateRoute.bind(this);
    }
    updateRoute(route) {
        console.log("Inside main interface")
        console.log(route)
        this.setState({route: route})}
    render() {
        return(
        <div className="row bg-light">
            <div className="col-4 pe-0">
            <LeftForm updateRoute={this.updateRoute}/> 
            </div>
            <div className="col-8 ps-0">
            <MapDisplay route={this.state.route}/>
            </div>
        </div>
        );
    }
}

export default MainInterface;