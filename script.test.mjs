import { checkText } from "./script.mjs";
import assert from "node:assert";
import test from "node:test";

test("he go to the island", () => {
  assert.deepEqual(checkText("he go to the island"), []);
});

test("they make a fire", () => {
  assert.deepEqual(checkText("they make a fire"), []);
});

test("he will get married, she will not", () => {
  assert.deepEqual(checkText("he will get married, she will not"), []);
});

test("red-orange fire", () => {
  assert.deepEqual(checkText("red-orange fire"), []);
});

test("I love Glasgow", () => {
  assert.deepEqual(checkText("I love Glasgow"), []);
});

// hello world
// they create some dinner
// she give gift, then go out
// he like egg-nog
// go to birmingham

test("hello world", () => {
  assert.deepEqual(checkText("hello world"), ["hello", "world"]);
});
test("they create some dinner", () => {
  assert.deepEqual(checkText("they create some dinner"), ["create", "dinner"]);
});
test("she give gift, then go out", () => {
  assert.deepEqual(checkText("she give gift, then go out"), ["gift"]);
});
test("he like egg-nog", () => {
  assert.deepEqual(checkText("he like egg-nog"), ["nog"]);
});
test("go to birmingham", () => {
  assert.deepEqual(checkText("go to birmingham"), ["birmingham"]);
});
