import Ricerca from "./Ricerca";
import Videoteca from "./Videoteca";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Menu";

function Layout() {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Videoteca}>
            {/* <Videoteca /> */}
          </Route>
          <Route exact path="/ricerca" component={Ricerca}>
            {/* <Ricerca /> */}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Layout;
