import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';

import Register from '../src/component/auth/Register';
import Welcome from '../src/component/welcome/Welcome';
import Login from '../src/component/auth/Login';
import NotFound from '../src/component/notfound/NotFound';
import './index.css';
import NewApp from '../src/component/loggedout/NewApp';
import BlogDelete from '../src/component/admin/AdminDelete';
import { HashRouter } from 'react-router-dom';

localStorage.setItem('loggedIn', false)

const Routing = () => (
   <HashRouter>
      <Router>
       <div>
      
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path  ="/home" component={BlogDelete} />
        <Route path="/login" component={Login} />
        <Route  path="/logout" component={NewApp} />
        <Route  path="/register" component={Register} />
        <Route path="/admin" component={App} />
        <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
    </HashRouter>
  )

ReactDOM.render(<Routing />, document.getElementById('root'));