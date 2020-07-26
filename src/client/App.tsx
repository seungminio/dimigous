import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Root, Auth, Global } from '../pages';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Root} />
      <Route exact path="/global" component={Global} />
      <Route exact path="/oauth/authorize" component={Auth} />
    </Switch>
  </BrowserRouter>
);

export default App;
