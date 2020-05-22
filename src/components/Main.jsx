import React from 'react';
import * as Router from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';

const {Route, Switch, Redirect} = Router;

export default function Main() {
  return (
    <Switch>
      <Route path="/loginpage" component={LoginPage}/>
      <Route path="/profilepage" component={ProfilePage}/>
      <Route path="/" render={() => <Redirect to='/loginpage'/>}/>
    </Switch>
  );
}

