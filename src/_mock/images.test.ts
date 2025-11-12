import { test, expect } from "vitest";
import { images } from "./images";

test("all mock images have valid structure", () => {
  for (const image of images) {
    expect(image).toHaveProperty("id");
    expect(image).toHaveProperty("src");
    expect(image).toHaveProperty("title");
    expect(image).toHaveProperty("description");

    expect(image.src).toMatch(/^\/images\/.+\.(jpg|jpeg|png|webp)$/);

    expect(typeof image.id).toBe("string");
    expect(typeof image.title).toBe("string");
  }
});

test("image IDs are unique", () => {
  const ids = images.map((image) => image.id);
  const uniqueIds = new Set(ids);
  expect(uniqueIds.size).toBe(ids.length);
});
