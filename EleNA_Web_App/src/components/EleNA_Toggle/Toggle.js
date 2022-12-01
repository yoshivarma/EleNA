import React from "react";

const ButtonGroup = () => {
  return (
    <div>
      <button>Min</button>
      <button>None</button>
      <button>Max</button>
    </div>
  )
}

export default ButtonGroup;

// import React from 'react'
// import {PendingButton} from 'react-tri-button'
 
// class Toggle extends React.Component {
 
//   render () {
//     return (
//       <PendingButton onFetching={this.onFetchingList} onError={this.onError} onSuccess={this.onSuccess}>
//         Pending Button
//       </PendingButton>
//     )
//   }
// }
// export default Toggle;

// function tgl(){
//     var t = document.getElementById("myBtn");
//     if(t.value=="ON"){
//         t.value="OFF";
//         }
//     else if(t.value=="OFF")
//         {
//         t.value="ON";
//         };

//     return (
//         <div>
//             <input type="button" id="myBtn" value="OFF" onclick="tgl();"/>
//             <script src="test.js"></script>
//         </div>
//     );
// }
// export default tgl;
