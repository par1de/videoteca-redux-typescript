import React from "react";
import { Flex } from "@chakra-ui/react";

import { ColorModeSwitcher } from "./ColorModeSwitcher";

import "./App.css";
import Videoteca from "./features/components/Videoteca";

function App() {
  return (
    <>
      <ColorModeSwitcher />
      <Flex h="100%" className="App" direction="column">
        <header className="App-header">
          <Videoteca />
        </header>
      </Flex>
    </>
  );
}

export default App;
