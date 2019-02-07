import React from 'react';
import * as $ from 'axios';
import './Welcome.css';
import logo from './updated-logo.gif';

class Welcome extends React.Component {

render() {
    return (
        <div className="welcome-page">
        
       <div className="animated"><a href="/home"><img src={logo} /></a></div>
       <div className="welcome-text">welcome. click to <s>vent</s> enter</div>
       
        
        
</div>
    )
}

}

export default Welcome;