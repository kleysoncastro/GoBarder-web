import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SingUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Roures() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />

      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/profile" exact component={Profile} />
    </Switch>
  );
}
