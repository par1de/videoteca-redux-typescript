import React from "react";
import { Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import "./App.css";
import Videoteca from "./features/components/Videoteca";
import Ricerca from "./features/components/Ricerca";
import Test from "./features/components/Test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <ColorModeSwitcher />
        <Flex h="100%" className="App" direction="column">
          <header className="App-header">
            {/* <Router> */}
            <Switch>
              <Route exact path="/">
                <Videoteca />
              </Route>
              <Route path="/ricerca">
                <Ricerca />
              </Route>
              <Route path="/test">
                <Test />
              </Route>
            </Switch>
            {/* </Router> */}
          </header>
        </Flex>
      </Router>
    </>
  );
}

export default App;
