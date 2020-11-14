import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { Home } from './Home/Home';
import { Projects } from './Projects/Projects';
import { Contact } from './Contact/Contact';

import './App.scss';

export const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <div className='app-content'>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/projects'><Projects /></Route>
          <Route path='/contact'><Contact /></Route>
          <Redirect to='/' />
        </Switch>
      </div>
    </div>
  );
};
