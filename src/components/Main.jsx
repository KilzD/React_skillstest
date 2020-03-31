import React from 'react';
import * as Router from 'react-router-dom';

const {Route, Switch} = Router;

export default function Main() {
  return (
    <Switch>
      <Route path="/">
        <div/>
      </Route>
    </Switch>
  );
}
