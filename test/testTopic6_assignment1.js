import assert from "assert";

import {
  avg,
  factorial,
  gcd,
  largestPrime,
  swapDigits,
  variation
} from "../exercises/topic06_functions/assignment01_remake.js";

describe("6 Functions", function () {
  describe("1 # Assignment 1: Remake", function () {
    describe("1 # Greatest Common Divisor", function () {

      it("gcd(225, 15) = 15", function () {
        assert.strictEqual(gcd(225, 15), 15);
      });

      it("gcd(15, 225) = 15", function () {
        assert.strictEqual(gcd(15, 225), 15);
      });

      it("gcd(12, 15) = 3", function () {
        assert.strictEqual(gcd(12, 15), 3);
      });

      it("gcd(15, 12) = 3", function () {
        assert.strictEqual(gcd(15, 12), 3);
      });

      it("gcd(a, a) = a", function () {
        assert.strictEqual(gcd(15, 15), 15);
      });
    });

    describe("2 # Swap digits", function () {

      it("Positive", function () {
        assert.strictEqual(swapDigits(123), 321);
      });

      it("Negative", function () {
        assert.strictEqual(swapDigits(-123), -321);
      });

      it("Trailing zeros", function () {
        assert.strictEqual(swapDigits(700), 7);
      });

      it("Large", function () {
        assert.strictEqual(swapDigits(123456789), 987654321);
      });

    });

    describe("3 # Factorial", function () {

      it("Five", function () {
        assert.strictEqual(factorial(5), 120);
      });

      it("One", function () {
        assert.strictEqual(factorial(1), 1);
      });

      it("Zero", function () {
        assert.strictEqual(factorial(0), 1);
      });

      it("Negative", function () {
        assert.strictEqual(factorial(-1), NaN);
      });
    });

    describe("4 # Variation", function () {
      it("Simple, small", function () {
        assert.strictEqual(variation(1, 2), 2);
      });

      it("Five out of five:", function () {
        assert.strictEqual(variation(5, 5), 120);
      });

      it("Five out of six:", function () {
        assert.strictEqual(variation(5, 6), 720);
      });

      it("The input cannot contain negative numbers", function () {
        assert.strictEqual(variation(-1, 100), NaN);
      });

      it("The input cannot contain negative numbers", function () {
        assert.strictEqual(variation(100, -1), NaN);
      });

      it("The input cannot contain negative numbers", function () {
        assert.strictEqual(variation(-100, -1), NaN);
      });

      it("When the second input is less than the first, there are no options of making the selection.", function () {
        assert.strictEqual(variation(6, 5), 0);
      });

      it("On large inputs, you have to watch out ...", function () {
        assert.strictEqual(variation(1, 1000), 1000);
      });

    });

    describe("5 # Average", function () {
      // Note that we only supply test-examples with integer results, so we do not run into rounding errors when asserting.
      it("Simple, small", function () {
        assert.strictEqual(avg([1, 2, 3]), 2);
      });

      it("Single", function () {
        assert.strictEqual(avg([123]), 123);
      });

      it("Empty", function () {
        assert.strictEqual(avg([]), NaN);
      });
    });

    describe("6 # Largest prime", function () {
      // Note that we only supply test-examples with integer results, so we do not run into rounding errors when asserting.
      it("Itself", function () {
        assert.strictEqual(largestPrime(101), 101);
      });

      it("One below", function () {
        assert.strictEqual(largestPrime(102), 101);
      });

      it("Smallest", function () {
        assert.strictEqual(largestPrime(2), 2);
      });

      it("No primes below 2", function () {
        assert.strictEqual(largestPrime(1), NaN);
      });

      it("No negative primes", function () {
        assert.strictEqual(largestPrime(-100), NaN);
      });
    });
  });
});
