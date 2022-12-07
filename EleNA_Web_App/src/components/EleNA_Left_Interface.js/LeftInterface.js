import React from 'react';
import './LeftInterface.css';
import PercentageSlider from '../EleNA_Slidder/Slider';
// import Toggle from '../EleNA_Toggle/Toggle'

class SampleForm extends React.Component {
 
    constructor(props) {
        super(props);

        this.state = {
            source: "",
            destination: "",
            percentage: 50,
            elevationType: "MIN",
            json: [],
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
        this.setState({
          route: json["Route"],
          renderRoute: true,
          distance: json["Distance"],
          elevation: json["Elevation Gain"]
        });
    });
  }

    render() {
        return (
            <>            
            {/* <h3 className="mt-2">EleNA</h3> */}
          <nav class="navbar navbar-expand-md navbar-red" >
            <a class="navbar-brand" href="#">
              <img src="hiking.png" width="30" height="25" class="d-inline-block align-top" alt="logo"/>
              EleNA
            </a>
          </nav>
            <div class="row align-items-center">
            <div className="ms-2">
                <div className="form-floating mt-2">
                    <input type="text" id="source" className="source form-control" placeholder="Enter Source" onChange={this.handleSourceChange} value={this.state.source} required/>
                    <label htmlFor="source">Enter Source</label>
                </div>
                <div className="form-floating mt-2">
                    <input type="text" id="destination" className="destination form-control" placeholder="Enter Destination" onChange={this.handleDestinationChange} value={this.state.destination} required/>
                    <label htmlFor="destination">Enter Destination</label>
                </div>
                <div className="mt-2">
                    <PercentageSlider onChange={this.handleSliderChange} value={this.state.percentage}/>
                </div>
                <div className="mt-2">
                    <input className={this.state.elevationType === "MIN" ? "btn btn-primary" : "btn btn-light"} onClick={() => this.setElevationType("MIN")} value="MIN" type="button"/>
                    <input className={this.state.elevationType === "MAX" ? "btn btn-primary" : "btn btn-light"} onClick={() => this.setElevationType("MAX")} value="MAX" type="button" />
                </div>
                <div className="mt-2">
                    <button className="btn btn-primary form-control" onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
            </div>
            </>
        );
    }      
}

export default SampleForm