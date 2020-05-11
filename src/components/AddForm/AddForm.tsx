import React from "react";
import { testIds } from "./testIds";

interface IProps {
  dataTestId: string;
}

export const AddForm = (props: IProps) => {
  const { dataTestId } = props;
  return (
    <div data-testid={dataTestId}>
      <input data-testid={testIds.name} />
      <input data-testid={testIds.value} />
      <button data-testid={testIds.submit}>Submit</button>
    </div>
  );
};
