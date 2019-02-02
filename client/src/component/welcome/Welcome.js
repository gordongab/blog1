import React from 'react';
import * as $ from 'axios';
import './Welcome.css';
import logo from './welcome-logo.gif'

class Welcome extends React.Component {

render() {
    return (
        <div className="welcome-page">
       <div className="animated"><a href="/welcome"><img src={logo} /></a>
</div>
        
        <h1>welcome. click to <s>vent</s> enter</h1>
</div>
    )
}

}

export default Welcome;