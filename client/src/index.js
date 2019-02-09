import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Register from '../src/component/auth/Register';
import Welcome from '../src/component/welcome/Welcome';
import Login from '../src/component/auth/Login';
import NotFound from '../src/component/notfound/NotFound';
import './index.css';
import NewApp from '../src/component/loggedout/NewApp';
import BlogDelete from '../src/component/admin/AdminDelete';

localStorage.setItem('loggedIn', false)

const Routing = () => (
   
      <Router>
       <div>
      
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path  ="/home" component={BlogDelete} />
        <Route path="/login" component={Login} />
        <Route  path="/logout" component={NewApp} />
        <Route  path="/profile" component={Register} />
        <Route path="/admin" component={App} />
        <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
   
  )

ReactDOM.render(<Routing />, document.getElementById('root'));