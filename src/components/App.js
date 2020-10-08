import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Home } from './Home/Home';
import { Projects } from './Projects/Projects';

import './App.scss';

export const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/projects'><Projects /></Route>
        <Redirect to='/' />
      </Switch>
    </div>
  );
};
