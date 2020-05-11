import puppeteer, { Page } from "puppeteer";

export const createAddFormDriver = (
  page: Page,
  testId: string,
  parentTestId?: string
) => {
  const getSelector = (...ids: (string | undefined)[]) =>
    ids
      .filter(Boolean)
      .map((id) => `[data-testid=${id}]`)
      .join("");

  return {
    exists: async () => {
      try {
        return await page.$eval(
          getSelector(parentTestId, testId),
          (x) => !!x.outerHTML
        );
      } catch (e) {
        return false;
      }
    },
  };
};
