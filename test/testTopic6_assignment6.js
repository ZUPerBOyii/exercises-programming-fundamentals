import assert from "assert";

import {extreme,
  shiftToPositive,
  shiftToPositiveInPlace,
  sort,
  sortCopy
} from "../exercises/topic06_functions/assignment06_extreme_arrays.js";

describe("6 Functions", function () {
  describe("1 # Assignment 1: Remake", function () {

    it("extreme", function () {
      assert.strictEqual( extreme([-2, 1, 0, -3, -7]),-7);
      assert.strictEqual( extreme([1, 7, 0, -3, -7], false), 7);
    });


    it("shift to positive", function () {
      const array = [-2, 1, 0, -3, -7];
      assert.deepStrictEqual( shiftToPositive(array), [5, 8, 7, 4, 0]);
      assert.deepStrictEqual( array, [-2, 1, 0, -3, -7]);
      assert.deepStrictEqual( shiftToPositive([1, 2, 3, 4]), [1, 2, 3, 4]);
    });

    it("shift to positive (in place)", function () {
      const array = [-2, 1, 0, -3, -7];
      assert.deepStrictEqual( shiftToPositiveInPlace(array), [5, 8, 7, 4, 0]);
      assert.deepStrictEqual( array, [5, 8, 7, 4, 0]);
      assert.deepStrictEqual( shiftToPositiveInPlace([1, 2, 3, 4]), [1, 2, 3, 4]);
    });

    it("sort", function () {
      const array = [9, 1, 5, 7, 3, 8, 4, 6, 2, 0];
      sort(array);
      assert.deepStrictEqual( array, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("sort copy", function () {
      const array = [9, 1, 5, 7, 3, 8, 4, 6, 2, 0];
      const hardCopy = [9, 1, 5, 7, 3, 8, 4, 6, 2, 0];
      assert.deepStrictEqual( sortCopy(array), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      assert.deepStrictEqual(hardCopy, array);
      assert.deepStrictEqual( sortCopy([100, -10, 0]), [-10, 0, 100]);
    });
  });
});
