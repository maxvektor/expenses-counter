import { Page } from "puppeteer";
import { testIds } from "./testIds";
import { exists, getSelector } from "../../../e2e/utils";

export const createAddFormDriver = (
  page: Page,
  testId: string,
  parentTestId?: string
) => {
  return {
    addItem: async ({ name, value }: { name: string; value: number }) => {
      await page.type(getSelector(parentTestId, testId, testIds.name), name);
      await page.type(getSelector(parentTestId, testId, testIds.value), String(value));
      await page.click(getSelector(parentTestId, testId, testIds.submit));
    },
    exists: async () => await exists(page, testId, parentTestId),
  };
};
