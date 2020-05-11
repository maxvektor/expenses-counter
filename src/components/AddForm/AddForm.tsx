import React, { useState } from "react";
import { testIds } from "./testIds";
import { IExpenseItem } from "../App/App";
import cuid from "cuid";

interface IProps {
  testId: string;
  addItem(item: IExpenseItem): void;
}

export const AddForm = (props: IProps) => {
  const { testId, addItem } = props;

  const [name, setName] = useState("");
  const [value, setValue] = useState(0);

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(Number(e.target.value));

  return (
    <div data-testid={testId}>
      <input value={name} onChange={onNameChange} data-testid={testIds.name} />
      <input
        value={value}
        onChange={onValueChange}
        data-testid={testIds.value}
      />
      <button
        onClick={() => addItem({ name, value, id: cuid() })}
        data-testid={testIds.submit}
      >
        Submit
      </button>
    </div>
  );
};
