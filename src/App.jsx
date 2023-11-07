import React from "react";
import "./App.css";

import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import Counter from "./components/counter";
import ContextProvider from "./Context/contextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <Counter />
        <Increment />
        <Decrement />
      </ContextProvider>
    </>
  );
}

export default App;
