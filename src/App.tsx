import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Page404 } from './pages/404';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
};

export { App };
