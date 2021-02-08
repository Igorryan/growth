import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard'
import Executives from '../pages/Executives'
import Portfolio from '../pages/Portfolio'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/executives" component={Executives} />
    <Route path="/portfolio" component={Portfolio} />
  </Switch>
)

export default Routes;