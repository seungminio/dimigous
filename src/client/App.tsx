import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Root, Global } from '../pages';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/global" component={Global} />
      <Route exact path="/oauth2.0/authorize" component={Root} />
    </Switch>
  </BrowserRouter>
);

export default App;
