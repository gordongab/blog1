import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Users from '../src/component/user/Users';
import Register from '../src/component/register/Register';
import NotFound from '../src/component/notfound/NotFound';
import './index.css';


const routing = (
    <Router>
       <div>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">Users</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/user" component={Users} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));