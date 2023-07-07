import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routings from "./Components/Routings";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routings />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
