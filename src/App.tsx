import React from "react";
import { Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import "./App.css";
import Videoteca from "./features/components/Videoteca";
import Ricerca from "./features/components/Ricerca";
import Test from "./features/components/Test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./features/components/Layout";

function App() {
  return (
    <>
      <ColorModeSwitcher />
      <Flex h="100%" className="App" direction="column">
        <header className="App-header">
          <Layout />
        </header>
      </Flex>
    </>
  );
}

export default App;
