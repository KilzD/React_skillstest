import React from 'react';
import * as Router from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const {Route, Switch, Redirect} = Router;

export default function Main() {
  return (
    <Switch>
      <Route path="/loginpage" component={LoginPage}/>
      <Route path="/" render={() => <Redirect to='/loginpage'/>}/>
    </Switch>
  );
}
