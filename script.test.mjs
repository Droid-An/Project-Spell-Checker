import { checkText } from "./script.mjs";
import assert from "node:assert";
import test from "node:test";
import words from "./words.json" with { type: "json" };

// he go to the island
// they make a fire
// he will get married, she will not
// red-orange fire
// I love Glasgow

test("check text", () => {
  assert.deepEqual(checkText("he go to the island"), []);
});

test("check text", () => {
  assert.deepEqual(checkText("they make a fire"), []);
});

test("check text", () => {
  assert.deepEqual(checkText("he will get married, she will not"), []);
});

test("check text", () => {
  assert.deepEqual(checkText("red-orange fire"), []);
});

test("check text", () => {
  assert.deepEqual(checkText("I love Glasgow"), []);
});