import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import GitProfileSearch from 'pages/GitProfileSearch';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/gitprofilesearch">
        <GitProfileSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
