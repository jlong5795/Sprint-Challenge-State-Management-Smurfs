import React from "react";
import "./App.css";

import SmurfList from './SmurfList';
import NewSmurf from './NewSmurf';

function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <NewSmurf />
      <SmurfList />
    </div>
  );
}

export default App;
