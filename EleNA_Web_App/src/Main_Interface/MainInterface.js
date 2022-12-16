import React from 'react';
import MapInterface from '../Map_Interface/MapInterface';
import LeftInterface from '../Left_Interface/LeftInterface';
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
        this.setState({route: route})
    }

    render() {
        return(
        <div className="row">
            <div className="col-3 pe-0 bg-dark">
            <LeftInterface updateRoute={this.updateRoute}/>
            </div>
            <div className="col-9 ps-0">
            <MapInterface route={this.state.route}/>
            </div>
        </div>
        );
    }
}

export default MainInterface;