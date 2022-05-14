import React from "react";
import "./App.css";
import { ContinuousSlider, HelloWorld } from "auth-comp-library";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <ContinuousSlider key={1}/>
    </div>
  );
}

export default App;
