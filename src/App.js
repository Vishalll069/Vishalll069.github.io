import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";

function App() {
  let [boolean, setBoolean] = useState(true);

  function handleClick() {
    setBoolean(!boolean);
    // console.log(boolean);
  }

  return (
    <div className="App">
      IN PROGRESSSS.............
      <Intro handleClick={handleClick} boolean={boolean} />
    </div>
  );
}

export default App;
