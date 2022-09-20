import assert from "assert";
import fs from "fs";

import {line,
  rectangle,
  square} from "../exercises/topic06_functions/assignment07_shapes.js";


function readShape(fn){
  return fs.readFileSync("./test/06Functions7_shapes/" + fn, "utf-8").replace(/[\r]/g, "");
}

describe("6 Functions", function () {
  describe("7 # Assignment 7: Shapes", function () {

    it("Line", function () {
      assert.strictEqual( line(4),"****");
      assert.strictEqual( line(4, false),"*  *");
      assert.strictEqual( line(4, false, 3),"   *  *");
      assert.strictEqual( line(1, true, 0, "+"), "+");
      assert.strictEqual( line(3, false, 1, "+-"), " +- +-");
      assert.strictEqual( line(0, false, 0, "+"), "");
    });

    it("Rectangle", function () {
      assert.strictEqual(rectangle(5, 3), readShape("rectangle_53"));
      assert.strictEqual(rectangle(3,4), readShape("rectangle_34"));
      assert.strictEqual(rectangle(3,4, false), readShape("rectangle_34_not_filled"));
      assert.strictEqual(rectangle(2,4, false), readShape("rectangle_24_not_filled"));
      assert.strictEqual(rectangle(3, 4, true, 2), readShape("rectangle_34_indent"));
      assert.strictEqual(rectangle(3, 4, true, 0, "x"), readShape("rectangle_34_x"));
    });

    it("Square", function () {
      assert.strictEqual(square(5, false, 3, "o"), readShape("square"));
    });
  });
});

