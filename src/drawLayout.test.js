import { drawLayout } from "./drawLayout";

describe("drawLayout", () => {
  let el;

  beforeEach(() => {
    el = document.createElement("div");
  });

  test("is a function", () => {
    expect(drawLayout).toBeInstanceOf(Function);
  });

  test("check UI", () => {
    drawLayout(el);

    expect(el.querySelector("h1")).not.toBeNull();
  });
});
