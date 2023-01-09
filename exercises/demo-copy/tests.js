import assert from "assert";
import { computeSum } from "./vx.js";

describe("Test Exam", function () {
  describe("File VX", function () {

    describe("Compute Sum", function () {

      it("Simple", function () {
        assert.strictEqual(computeSum(1,2), 3);
      });
    });
  });
});
