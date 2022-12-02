import React from 'react';
import './LeftInterface.css';
import PercentageSlider from '../EleNA_Slidder/Slider';
import Toggle from '../EleNA_Toggle/Toggle'


class SampleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <label>
                Source:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
            </div>
            <div className="row">
            <label>
              Destination:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
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