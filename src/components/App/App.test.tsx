import React from "react";
import { render } from "@testing-library/react";

import App from "./App";
import { testIds } from "../AddForm/testIds";

test("Should render <AddForm/>", () => {
  const { getByTestId } = render(<App />);
  const form = getByTestId(testIds.form);
  expect(form).toBeInTheDocument();
});
