import React from "react";

import "./App.css";
import { testIds } from "./testIds";
import { AddForm } from "../AddForm/AddForm";

function App() {
  return (
    <div className="App">
      <AddForm dataTestId={testIds.addForm} />
    </div>
  );
}

export default App;
