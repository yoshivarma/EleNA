import React from 'react';
import MapInterface from '../map-interface';
import LeftInterface from '../left-interface';
import './index.css';

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
            <div className="col-4 pe-0">
            <LeftInterface updateRoute={this.updateRoute}/>
            </div>
            <div className="col-8 ps-0">
            <MapInterface route={this.state.route}/>
            </div>
        </div>
        );
    }
}

export default MainInterface;