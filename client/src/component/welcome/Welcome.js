import React from 'react';
import * as $ from 'axios';
import './Welcome.css';
import logo from './updated-logo.gif';
import {Link} from 'react-router-dom';

class Welcome extends React.Component {

render() {
    return (
        <div className="welcome-page">
        
       <div className="animated"><Link to ="/home"><img src={logo} /></Link></div>
       <div className="welcome-text">welcome. click to <s>vent</s> enter</div>
       
        
        
</div>
    )
}

}

export default Welcome;