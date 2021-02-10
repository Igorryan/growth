import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Executives from '../pages/Executives'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import Journey from '../pages/Journey'
import HowWeDo from '../pages/HowWeDo'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/executives" component={Executives} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
    <Route path="/journey" component={Journey} />
    <Route path="/how-we-do" component={HowWeDo} />
  </Switch>
)

export default Routes;