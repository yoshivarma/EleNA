import React from 'react';
import './LeftInterface.css';
import Slider from "./components/slider/slider";

class LeftInterface extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            source: "",
            destination: "",
            percentage: 50,
            elevationType: "MIN",
            submitted: false,
            renderRoute: false
        };

        this.handleSourceChange = this.handleSourceChange.bind(this);
        this.handleDestinationChange = this.handleDestinationChange.bind(this);
        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.setElevationType = this.setElevationType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setElevationType(type){
        this.setState({elevationType: type});
    }

    handleSourceChange(event) {
        this.setState({source: event.target.value});
    }

    handleDestinationChange(event) {
        this.setState({destination: event.target.value});
    }

    handleSliderChange(event) {
        this.setState({percentage: event.target.valueAsNumber});
    }


    handleSubmit(event) {
        //an alert popup will be displayed to the user when source or destination are given empty or when source and destination are provided same
        if (this.state.source === this.state.destination || this.state.source === '' || this.state.destination === ''){
            window.alert("Invalid source or destination. Please enter proper source and destination")
        }
        // if source and destination are given, then the input details are passed as a JSON object to the backend algorithm
        else {
            this.setState({submitted: true, renderRoute: false})
            fetch("http://127.0.0.1:9000/get_route", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*'
                },
                body: JSON.stringify({
                    source: this.state.source,
                    destination: this.state.destination,
                    percentage: this.state.percentage,
                    elevationType: this.state.elevationType
                })
            })
            .then(res => res.json())
            .then(json => {
                //when source and destination are misspelt, an alert popup will be shown to the user asking to provide valid inputs
                if (json["Error"]) {
                    this.setState({
                       submitted: false
                    })
                    window.alert(json["Error"])
                }
                //when valid source and destination are given, we will set the route coordinates and display statistics
                else {
                   this.setState({
                    route: json["Route"],
                    submitted: false,
                    renderRoute: true,
                    distance: json["Distance"],
                    elevation: json["Elevation Gain"]
                })
                // pass the calculated route to Map Interface to plot the route.
                this.props.updateRoute(json["Route"])
                }
            })
    }
}

    render() {
        return (
            <div className="d-flex flex-column align-items-center">
                {/*Logo*/}
                <div className="mt-4">
                    <img src="/hiking.png" width="120" height="120" alt="logo"/>
                </div>
                <div className="w-75">
                    <div className="mt-4">
                        <input type="text" id="source" placeholder="Enter Source" className="form-control" onChange={this.handleSourceChange} value={this.state.source} required="required"/>
                    </div>
                    <div className="mt-4">
                        <input type="text" id="destination" placeholder="Enter Destination" className="form-control" onChange={this.handleDestinationChange} value={this.state.destination} required="required"/>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <div className="text-white">Elevation</div>
                    <div className="mt-2">
                        <input className={this.state.elevationType === "MIN" ? "btn btn-primary btn-sm" : "btn btn-light btn-sm"} onClick={() => this.setElevationType("MIN")} value="MIN" type="button" name="min"/>
                        <input className={this.state.elevationType === "MAX" ? "btn btn-primary btn-sm" : "btn btn-light btn-sm"} onClick={() => this.setElevationType("MAX")} value="MAX" type="button" name="max"/>
                    </div>
                </div>
                <div className="w-75 mt-4 text-center">
                    <div className="text-white">Percentage Increase: {this.state.percentage}</div>
                    <Slider onChange={this.handleSliderChange} value={this.state.percentage}/>
                </div>
                <div>
                    <button id="submit button" className="btn btn-primary form-control" onClick={this.handleSubmit}>Submit</button>
                </div>
                <div className="text-center text-white mt-4">
                    {this.state.submitted &&
                        <div>Calculating!!!</div>
                    }
                    {this.state.renderRoute &&
                        <div>
                            <div>Statistics</div>
                            <div name="fee_distance" value = {this.state.distance}>Total Distance: {this.state.distance} meters</div>
                            <div name="fee_elevation" value = {this.state.elevation}>Total Elevation: {this.state.elevation} meters</div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default LeftInterface