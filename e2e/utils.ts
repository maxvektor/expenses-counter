import { Page } from "puppeteer";

export const getSelector = (...ids: (string | undefined)[]) =>
  ids
    .filter(Boolean)
    .map((id) => `[data-testid=${id}]`)
    .join(" ");

export const exists = async (
  page: Page,
  testId: string,
  parentTestId?: string
) => {
  try {
    return await page.$eval(
      getSelector(parentTestId, testId),
      (x) => !!x.outerHTML
    );
  } catch (e) {
    return false;
  }
};
