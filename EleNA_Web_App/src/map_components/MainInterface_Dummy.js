import React from 'react';
// import SourceSearch from './SourceSearch';
// import './MainInterfaceDummy.css';
import RestAPITest from './RestAPITest';

class MainInterfaceDummy extends React.Component {
    render() {
        return <div className="content-container">
        <div className="row">
            <div className="SourceSearch">
                <RestAPITest />
            </div>
       </div>
    </div>
    }
}



export default MainInterfaceDummy;