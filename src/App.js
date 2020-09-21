import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import home from './pages/home';
import contact from './pages/contact';
import portfolio from './pages/portfolio';
import knowledges from './pages/knowledges';
import notFound from './pages/notFound';

const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/competences" component={knowledges} />
          <Route path="/contact" component={contact} />
          <Route path="/portfolio" component={portfolio} />
          <Route component={notFound} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;