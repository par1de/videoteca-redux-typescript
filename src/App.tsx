import React from "react";
import { Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import "./App.css";
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
