import React from 'react';
import './bootstrap.css';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Sidebar from './components/Sidebar';
import Manage from './components/Manage';
import Login from './components/Login';
import Contact from './components/Contact';

function app() {
  return (
    <React.Fragment>
    <div className="d-flex">
      <Sidebar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/manage" component={Manage} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
    </React.Fragment>
  );
}

export default app;
