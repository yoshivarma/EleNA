import React from 'react';
import './LeftInterface.css';
import PercentageSlider from '../EleNA_Slidder/Slider';
import Toggle from '../EleNA_Toggle/Toggle'


class SampleForm extends React.Component {

    constructor(props) {
        super(props);
        this.ChildElement = React.createRef();
        this.state = {
          source: "",
          destination: "",
          slider: 50,
          json :[],
        };
    
        this.handleSourceChange = this.handleSourceChange.bind(this);
        this.handleDestinationChange = this.handleDestinationChange.bind(this);
        this.handleSliderChange = this.handleSliderChange.bind(this);
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

    handleSliderChange(event) {
      this.setState({
        slider: event.target.valueAsNumber,
      });
    }
    
      handleSubmit(event) {
        alert('Source: ' + this.state.source, 'and Destination : ' + this.state.destination, ' are submitted');
        event.preventDefault();
        this.setState({value: event.target.value });
		    var source = document.getElementById('source').value;
        var destination = document.getElementById('destination').value;
        // var sliderValue = document.getElementById('this.state.slider').value;
        console.log('Source: ' + source, 'and Destination : ' + destination, ' are submitted');
        console.log(this.state.slider)
  
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
                <PercentageSlider onChange={this.handleSliderChange} value={this.state.slider} />
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