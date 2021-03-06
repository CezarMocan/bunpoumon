import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Lessons from './components/Lessons.jsx';
import Activity from './components/Activity.jsx';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/lessons' component={Lessons} />
    <Route path='/activity/:activityId' component={Activity} />
  </Route>
);