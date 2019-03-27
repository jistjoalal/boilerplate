import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './ui/pages/Home';

import ScrollToTop from './ui/components/ScrollToTop';

export default Routes = _ =>
  <Router>
    <ScrollToTop>
      <Switch>
  
        {/* home */}
        <Route path="/" exact component={Home} />
        
        {/* not found */}
        <Route component={Home} />
        
      </Switch>
    </ScrollToTop>
  </Router>
