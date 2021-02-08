import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard'
import Executives from '../pages/Executives'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import Journey from '../pages/Journey'
import HowWeDo from '../pages/HowWeDo'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/executives" component={Executives} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
    <Route path="/journey" component={Journey} />
    <Route path="/how-we-do" component={HowWeDo} />
  </Switch>
)

export default Routes;