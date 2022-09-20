import assert from "assert";

import {    find_index_v1,
  find_index_v2,
  find_index_v3,
  find_index_v4,
  find_index_v5} from "../exercises/topic06_functions/assignment08_find.js";


describe("6 Functions", function () {
  describe("8 # Assignment 8: Find", function () {

    it("Find V1", function () {
      assert.strictEqual(find_index_v1("a", "azerty"), 0);
      assert.strictEqual(find_index_v1("z", "azerty"), 1);
      assert.strictEqual(find_index_v1("q", "azerty"), undefined);
    });

    it("Find V2", function () {
      assert.strictEqual(find_index_v2("a", "azerty"), 0);
      assert.strictEqual(find_index_v2("z", "azerty"), 1);
      assert.ok(!find_index_v2("q", "azerty"));
    });

    it("Find V3", function () {
      assert.strictEqual(find_index_v3("a", "azerty"), 0);
      assert.strictEqual(find_index_v3("z", "azerty"), 1);
      assert.strictEqual(find_index_v3("q", "azerty"), NaN);
    });

    it("Find V4", function () {
      assert.strictEqual(find_index_v4("a", "azerty"), 0);
      assert.strictEqual(find_index_v4("z", "azerty"), 1);
      assert.ok(find_index_v4("q", "azerty") < 0);
    });

    it("Find V5", function () {
      assert.strictEqual(find_index_v5("a", "azerty"), 0);
      assert.strictEqual(find_index_v5("z", "azerty"), 1);
      assert.strictEqual(find_index_v5("q", "azerty"), null);
    });
  });
});

