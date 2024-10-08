import { prependOnceListener } from "process";
import { Category } from "./category";

describe("Category Unit Test", () => {
  test("constructor of category", () => {
    const created_at = new Date();
    const category = new Category({
      name: "Movie",
      description: "description",
      is_active: true,
      created_at,
    });

    expect(category.props).toMatchObject({
      name: "Movie",
      description: "description",
      is_active: true,
      created_at,
    });

    /*  expect(category.name).toBe("Movie");
    expect(category.description).toBe("description");
    expect(category.is_active).toBeTruthy();
    expect(category.created_at).toBe(created_at); */
  });
});
