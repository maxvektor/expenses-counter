import React, { useState } from "react";

import "./App.css";
import { testIds } from "./testIds";
import { AddForm } from "../AddForm/AddForm";
import { ItemsList } from "../ItemsList/ItemsList";

export interface IExpenseItem {
  id: string;
  name: string;
  value: number;
}

function App() {
  const [items, setItems] = useState<IExpenseItem[]>([]);

  const addItem = (item: IExpenseItem) => setItems([...items, item]);

  return (
    <div className="App">
      <AddForm testId={testIds.addForm} addItem={addItem} />
      {items.length > 0 && <ItemsList items={items} testId={testIds.itemsList} />}
    </div>
  );
}

export default App;
