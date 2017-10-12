import { expect } from "chai";
import JSDOM from "jsdom";
import fs from "fs";

describe("This test should pass", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should say hello", () => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const window =new JSDOM.JSDOM(index).window;
    const h2 = window.document.getElementsByTagName('h2')[0];
    expect(h2.innerHTML).to.equal("Hello World Page");
  });
});
