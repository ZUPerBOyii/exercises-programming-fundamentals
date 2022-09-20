import assert from "assert";

import { isAlpha, isDigit, isInt, toLower, toUpper, trim } from "../exercises/topic06_functions/assignment02_strings.js";


describe("6 Functions", function () {
  describe("1 # Assignment 2: Basic text functions", function () {
    describe("Is digit", function () {
      it("Is digit", function () {
        assert.ok(isDigit("9"));
        assert.ok(!isDigit("a"));
        assert.ok(!isDigit("A"));
        assert.ok(!isDigit("@"));
      });
    });

    describe("Is alpha", function () {
      it("Is alpha", function () {
        assert.ok(!isAlpha("9"));
        assert.ok(isAlpha("a"));
        assert.ok(isAlpha("A"));
        assert.ok(!isAlpha("@"));
      });
    });

    describe("To upper", function () {
      it("To upper", function () {
        assert.strictEqual("123ABCXYZ#@&", toUpper("123abcXYZ#@&"));
      });
    });

    describe("To lower", function () {
      it("To lower", function () {
        assert.strictEqual("123abcxyz#@&", toLower("123abcXYZ#@&"));
      });
    });

    describe("Is integer", function () {
      it("Simple integer", function () {
        assert.ok(isInt("314"));
      });

      it("Simple negative integer", function () {
        assert.ok(isInt("-314"));
      });

      it("Explicit positive integer", function () {
        assert.ok(isInt("+314"));
      });

      it("Explicit positive integer, with whitespace between sign and number", function () {
        assert.ok(isInt("+  314"));
      });

      it("Integer with leading whitespace", function () {
        assert.ok(isInt("  314"));
      });

      it("Integer with trailing whitespace", function () {
        assert.ok(isInt("314  "));
      });

      it("No floating points", function () {
        assert.ok(!isInt("-3.14"));
      });

      it("No illegal leading signs", function () {
        assert.ok(!isInt("@  314"));
      });

      it("No intermittent whitespace", function () {
        assert.ok(!isInt("3 1 4"));
      });

    });

    describe("Trim", function () {
      it("Leading and trailing, 'long'", function () {
        assert.strictEqual("abc", trim(" \t\r\nabc \t\r\n"));
      });

      it("Leading and trailing, 'short'", function () {
        assert.strictEqual("a", trim(" \t\r\na \t\r\n"));
      });

      it("Leading and trailing, 'empty'", function () {
        assert.strictEqual("", trim(" \t\r\n \t\r\n"));
      });

      it("Intermittent whitespaces are preserved", function () {
        assert.strictEqual("a\rb", trim(" \t\ra\rb \t\r\n"));
      });

    });

  });

});
