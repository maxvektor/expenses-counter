import { createAddFormDriver } from "../src/components/AddForm/AddForm.e2e.driver";
import { testIds } from "../src/components/App/testIds";

describe("App", () => {
  let addFormDriver: ReturnType<typeof createAddFormDriver>;

  beforeAll(async () => {
    await page.goto("http://localhost:3000");
    addFormDriver = createAddFormDriver(page, testIds.addForm);
  });

  it("Add from should exist", async () => {
    const exists = await addFormDriver.exists();
    expect(exists).toBe(true);
  });
});
