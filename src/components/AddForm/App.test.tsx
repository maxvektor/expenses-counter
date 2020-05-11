import React from "react";
import { render } from "@testing-library/react";

import { AddForm } from "./AddForm";
import { testIds } from "./testIds";

describe("<AddForm/>", () => {
  test("Should render input for name", () => {
    const { getByTestId } = render(<AddForm dataTestId={testIds.form} />);
    const name = getByTestId(testIds.name);
    expect(name).toBeInTheDocument();
  });

  test("Should render input for value", () => {
    const { getByTestId } = render(<AddForm dataTestId={testIds.form} />);
    const value = getByTestId(testIds.value);
    expect(value).toBeInTheDocument();
  });

  test("Should render submit button", () => {
    const { getByTestId } = render(<AddForm dataTestId={testIds.form} />);
    const button = getByTestId(testIds.submit);
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe("Submit");
  });
});
