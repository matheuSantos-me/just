import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../containers/Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
