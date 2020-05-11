import React from "react";
import { IExpenseItem } from "../App/App";
import { testIds } from "./testIds";

interface IProps {
  testId: string;
  items: IExpenseItem[];
}

const Item = (props: IExpenseItem) => {
  const { name, value } = props;
  return (
    <dl data-testid={testIds.item}>
      <dt data-testid={testIds.name}>{name}</dt>
      <dd data-testid={testIds.value}>{value}</dd>
    </dl>
  );
};

export const ItemsList = (props: IProps) => {
  const { testId, items } = props;
  return (
    <div data-testid={testId}>
      {items.map((x) => (
        <Item key={x.id} {...x} />
      ))}
    </div>
  );
};
