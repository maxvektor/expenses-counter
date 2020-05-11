import { Page } from "puppeteer";
import { exists, getSelector } from "../../../e2e/utils";
import { testIds as listTestIds } from "./testIds";

export const createItemsListDriver = (
  page: Page,
  testId: string,
  parentTestId?: string
) => {
  return {
    getItemByIndex: async (index: number) =>
      await page.$$eval(
        getSelector(testId, listTestIds.item),
        (elems, index: number, nameId, valueId) => {
          const item = elems[index];

          const name = item?.querySelector(nameId)?.innerHTML || null;
          const value = Number(item?.querySelector(valueId)?.innerHTML) || null;

          return {
            name,
            value,
          };
        },
        index,
        getSelector(listTestIds.name),
        getSelector(listTestIds.value)
      ),
    exists: async () => await exists(page, testId, parentTestId),
  };
};
