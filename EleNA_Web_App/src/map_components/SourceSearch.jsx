import React, { Component } from 'react';

const handleSubmit = (e)=>{
    e.preventDefault();
    const first=e.target.fname.value;
    const last=e.target.lname.value;
    console.log("First name : " +first,"\n","Last name : " +last);
  }
  
class SourceSearch extends Component {

render(){
return (
    <div>
    <form onSubmit={handleSubmit}>
        <input type="text" name="Enter source" placeholder="Source"/><br/><br/>
        <input type="text" name="Enter destination"  placeholder="Destination"/><br/><br/>
        <button>Submit</button>
    </form>
    </div>
  );
}
} 

export default SourceSearch;
