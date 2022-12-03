import React from 'react';
import './LeftInterface.css';
import PercentageSlider from '../EleNA_Slidder/Slider';
import Toggle from '../EleNA_Toggle/Toggle'


class SampleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          source: "",
          destination: "",
          json :[],
        };
    
        this.handleSourceChange = this.handleSourceChange.bind(this);
        this.handleDestinationChange = this.handleDestinationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSourceChange(event) {
      this.setState({
        source: event.target.value,
      });
    }
  
      handleDestinationChange(event) {
      this.setState({
        destination: event.target.value,
      });
    }
  
    
      handleSubmit(event) {
        alert('Values are submitted: ' + this.state.destination, + this.state.source);
        event.preventDefault();
        this.setState({ value: event.target.value });
		    var source = document.getElementById('source').value;
        var destination = document.getElementById('destination').value;
        console.log(source);
        console.log(destination);
    }
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <label>
                Source:
                <input type="text" 
                    classname = "source" 
                    id ="source" 
                    autoFocus
                    placeholder="Enter source" 
                    onChange={this.handleSourceChange}
                    value={this.state.source} required />
              </label>
            </div>
            <div className="row">
            <label>
              Destination:
              <input type="text" 
                    classname = "destination" 
                    id ="destination" 
                    autoFocus
                    placeholder="Enter destination"  
                    value={this.state.destination} 
                    onChange={this.handleDestinationChange} required/>
            </label>
            </div>
            <div className="row">
                <div className="Slider">
                    <PercentageSlider/>
                </div>
            </div>
            <div className="row">
                <div className="Toggle">
                    <Toggle/>
                </div>
            </div>
            <div className="row">
              <input type="submit" value="Submit" />
            </div>
          </form>
        );
    }

      
}

export default SampleForm;