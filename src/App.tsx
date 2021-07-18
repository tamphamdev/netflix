import React, { useState } from "react";

import Jumbotron from "./components/Jumbotron";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      Hello world
      <Jumbotron />
    </div>
  );
}

export default App;
