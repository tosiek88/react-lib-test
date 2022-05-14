import { FC } from "react";
import "./App.css";
import { ContinuousSlider, HelloWorld } from "auth-comp-library";

export const App: FC = () => {
  return (
    <div className="App">
      <HelloWorld />
      <ContinuousSlider key={1} />
    </div>
  );
};

export default App;
