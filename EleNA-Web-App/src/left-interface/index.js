import React from 'react';
import './index.css';
import Slider from './components/slider/Slider';

class LeftInterface extends React.Component {
 
  constructor(props) {
      super(props);

      this.state = {
          source: "",
          destination: "",
          percentage: 50,
          elevationType: "MIN",
          json: [],
          renderRoute: false,
          submitted: false
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
      if (this.state.source === this.state.destination){
        window.alert("Please enter proper source and destination")
        // this.state.source = ""
        // this.state.destination = ""
    }
      else{
        this.setState({submitted: true})
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
        console.log("initial json route",json["Route"]);
        // console.log(json["Distance"],json["Elevation Gain"]);
        
        this.setState({
          route: json["Route"],
          renderRoute: true,
          submitted: this.state.submitted,
          distance: json["Distance"],
          elevation: json["Elevation Gain"]
        })
        this.props.updateRoute(json["Route"])
    })
  }
}

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="ms-2 me-2 mt-2">
            {/* <h3 className="mt-2">EleNA</h3> */}
            <nav class="navbar" display= "inline-block">
              {/* <a class="navbar-brand" href="#" > */}
                <img src="hiking.png" width="120" height="120" color= "white" class="shadow" alt="logo"/>
              {/* </a> */}
            </nav>
          </div>
          
          <div class="d-grid gap-1">
            <div className="mt-1 ms-2 me-2">
                <input type="text" id="source" className="source form-control" placeholder="Enter Source" onChange={this.handleSourceChange} value={this.state.source} required />
                {/* <label htmlFor="source">Enter Source</label> */}
            </div>
            <div className="mt-1 ms-2 me-2">
                <input type="text" id="destination" className="destination form-control" placeholder="Enter Destination" onChange={this.handleDestinationChange} value={this.state.destination} required/>
                {/* <label htmlFor="destination">Enter Destination</label> */}
            </div>
          </div>

          <div className="set_margin ms-5 me-5 mt-5">
            <div className="d-flex flex-column justify-content-center ms-5 me-5 mt-5">
              <div className="mt-3">
                  <input className={this.state.elevationType === "MIN" ? "btn btn-primary btn-sm" : "btn btn-light btn-sm"} onClick={() => this.setElevationType("MIN")} value="MIN" type="button"/>
                  <input className={this.state.elevationType === "MAX" ? "btn btn-primary btn-sm" : "btn btn-light btn-sm"} onClick={() => this.setElevationType("MAX")} value="MAX" type="button" />
              </div>
              <div className="mt-3">
                  <Slider onChange={this.handleSliderChange} value={this.state.percentage}/>
              </div>
              <div className="mt-3">
                  <button className="btn btn-primary form-control" onClick={this.handleSubmit}>Submit</button>
              </div>
            </div>

            <div> 
              {!this.state.renderRoute && this.state.submitted ? "Calculating!!!":
              <div>
                {/* {this.props.updateRoute(this.state.route)} */}
                <div className='statistics'>
                  <input type="text" size="20" readOnly='readonly' placeholder="Distance Statistics" name="fee" value={this.state.distance}/>
                  <input type="text" size="20" readOnly='readonly' placeholder="Elevation Statistics" name="fee" value={this.state.elevation}/>
                </div>
              </div>}
            </div>
            
          </div>
          </form>
        );
    }      
}

export default LeftInterface