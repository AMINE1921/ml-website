import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/competences" component={Knowledges} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;