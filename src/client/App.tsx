import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Root } from '../pages';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/global" component={Root} />
      <Route exact path="/oauth2.0/authorize" component={Root} />
    </Switch>
  </BrowserRouter>
);

export default App;
