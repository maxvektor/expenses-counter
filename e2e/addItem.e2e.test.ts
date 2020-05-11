import { createAddFormDriver } from "../src/components/AddForm/AddForm.e2e.driver";
import { createItemsListDriver } from "../src/components/ItemsList/ItemsList.e2e.driver";

import { testIds } from "../src/components/App/testIds";
jest.setTimeout(8000);

describe("App", () => {
  let addFormDriver: ReturnType<typeof createAddFormDriver>;
  let itemsListDriver: ReturnType<typeof createItemsListDriver>;

  beforeAll(async () => {
    await page.goto("http://localhost:3000");
    addFormDriver = createAddFormDriver(page, testIds.addForm);
    itemsListDriver = createItemsListDriver(page, testIds.itemsList);
  });

  it("Add from should exist", async () => {
    const exists = await addFormDriver.exists();
    expect(exists).toBe(true);
  });

  describe("List of items", () => {
    it("Should not exist before items is added", async () => {
      const exists = await itemsListDriver.exists();
      expect(exists).toBe(false);
    });

    describe("After item is added", () => {
      beforeAll(async () => {
        await addFormDriver.addItem({ name: "Milk", value: 200 });
      });

      it("Should show new item in items list", async () => {
        const exists = await itemsListDriver.exists();
        const item = await itemsListDriver.getItemByIndex(0);

        const expectedValue = {
          name: "Milk",
          value: 200,
        };

        expect(exists).toBe(true);
        expect(item).toEqual(expectedValue);
      });
    });
  });
});
