import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Register from '../src/component/auth/Register';
import Welcome from '../src/component/welcome/Welcome';
import Login from '../src/component/auth/Login';
import NotFound from '../src/component/notfound/NotFound';
import './index.css';


const routing = (
    <Router>
       <div>
      <ul className="menu">
       <li>
          <Link to="/">Home</Link></li>
        <li>
          <Link to="/welcome">Dashboard</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/welcome" component={App} />
        
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));