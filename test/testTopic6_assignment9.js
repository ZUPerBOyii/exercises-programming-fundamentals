import assert from "assert";

import {fib, fibFast} from "../exercises/topic06_functions/assignment09_fib.js";


describe("6 Functions", function () {
  describe("9 # Assignment 9: Recursion", function () {
    describe("Recursive Fib", function () {
      it("base", function () {
        assert.strictEqual(fib(0),0);
        assert.strictEqual(fib(1),1);
        assert.strictEqual(fib(2),1);
      });

      it("'big'", function () {
        assert.strictEqual(fib(6),8);
      });

      it("'huge'", function () {
        assert.strictEqual(fibFast(40),102334155);
      }).timeout(100);
    });
  });
});

