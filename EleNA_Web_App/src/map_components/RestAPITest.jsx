import React from 'react';
// import './LoginForm.css';
// import request from 'superagent';
// import {Router,BrowserRouter,Link} from 'react-router-dom';
// import {Button} from 'react-bootstrap';

var divStyle = {
	width: "100%",
    height: "1140px",
    backgroundRepeat: 'no-repeat',
	backgroundSize:'cover',
	overflow:'hidden',
};
class RestAPITest extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			source: "",
            destination: "",
			email: "",
			password: "",
			json :[],
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSourceChange = this.handlesourceChange.bind(this);
        this.handleDestinationChange = this.handleDestinationChange.bind(this);
	}

	handleSubmit(event) {

		event.preventDefault();

		this.setState({ value: event.target.value });

		var source = document.getElementById('source').value;
        var destination = document.getElementById('destination').value;
		var role='user';
		var form = JSON.stringify({source : source, destination : destination});
		fetch ( "http://10.10.200.22:9000/users/login" , 
        {
            method: "POST",     
            headers: {
                "Content-Type": "application/json",
                "Accept"    :   "application,json",
              },       
            body: form, 
    }).then(result1=>result1.json())
    .then(function(result1){
        //accesstoken=window.localStorage.getItem('result1.access_token');
        //expirytime=window.localStorage.getItem('response.expiry_time');
		//refreshtoken=window.localStorage.getItem('response.refresh_token');
		console.log(result1);
        window.alert("Login successful");
        
		// accesstoken = result1.access_token;
		// role=result1.role;
		// console.log(accesstoken);
		console.log(role);
        localStorage.setItem("accesstoken",result1.access_token);
        //result1.access_token=localStorage.getItem("accesstoken");
		//module.exports={data:"accesstoken"};
		localStorage.setItem("role",role);
       // result1.role=localStorage.getItem("role");
//module.exports={data:"role"}; 
		window.location.href="/myhome";      
    })
    .catch(function(error){
		window.alert("please enter correct details");
        console.log(error);
    });
       
    
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

	render() {
		return (
			<div style={divStyle}>
			<div classsource="main-agileinfo slider ">
				<div classsource="items-group">
					<div classsource="item agileits-w3layouts">
						<div classsource="block text main-agileits">
							<span classsource="circleLight"></span>

							<div classsource="login-form loginw3-agile">
								<div classsource="agile-row">
									<h1>LOGIN</h1>
									<div classsource="login-agileits-top">
										<form autoComplete="off" onSubmit={this.handleSubmit}>
											<p>Source </p>
											<input type="text"
												classsource="source"
												id="source"
												pattern="^[A-Za-z0-9_.-@]*$"
												maxLength="12"
												autoFocus
												placeholder="Enter source"
												onChange={this.handleSourceChange}
												value={this.state.source} required />
                                            
                                            <p>Destination </p>
											<input type="text"
												classsource="source"
												id="source"
												pattern="^[A-Za-z0-9_.-@]*$"
												maxLength="12"
												autoFocus
												placeholder="Enter destination"
												onChange={this.handleDestinationChange}
												value={this.state.destination} required />
											
											<br />
											<input type="submit" value="Login" />
										</form>
									</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		

		);
	}
}

export default RestAPITest;