import assert from "assert";

import { toDutch } from "../exercises/topic06_functions/assignment04_toDutch.js";

describe("6 Functions", function () {
  describe("4 # Assignment 4: To Dutch", function () {

    it("Below 10 (positive)", function () {
      assert.strictEqual(toDutch(0), "nul");
      assert.strictEqual(toDutch(9), "negen");
    });

    it("Below 100 (positive)", function () {
      assert.strictEqual(toDutch(12), "twaalf");
      assert.strictEqual(toDutch(22), "tweeëntwintig");
      assert.strictEqual(toDutch(57), "zevenenvijftig");
    });

    it("Below 1000 (positive)", function () {
      assert.strictEqual(toDutch(110), "honderdtien"); // !!!
      assert.strictEqual(toDutch(315), "driehonderdvijftien");
      assert.strictEqual(toDutch(333), "driehonderddrieëndertig");
      assert.strictEqual(toDutch(300), "driehonderd");
      assert.strictEqual(toDutch(307), "driehonderdenzeven");
    });

    it("Huge positive", function () {
      assert.strictEqual(toDutch(781452321), "zevenhonderdeenentachtig miljoen " +
        "vierhonderdtweeënvijftigduizend " +
        "driehonderdeenentwintig");
    });

    it("Negative", function () {
      assert.strictEqual(toDutch(0), "nul");
      assert.strictEqual(toDutch(-0), "nul");
      assert.strictEqual(toDutch(-9), "min negen");
      assert.strictEqual(toDutch(-22), "min tweeëntwintig");
      assert.strictEqual(toDutch(-333), "min driehonderddrieëndertig");
      assert.strictEqual(toDutch(-781452321), "min zevenhonderdeenentachtig miljoen " +
        "vierhonderdtweeënvijftigduizend " +
        "driehonderdeenentwintig");
    });

  });

});
