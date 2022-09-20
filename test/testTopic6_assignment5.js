import assert from "assert";

import { isLeapYear, numberOfDaysInYear, numberOfDaysInMonth, numberOfDay , dayDifference} from "../exercises/topic06_functions/assignment05_dates.js";

describe("6 Functions", function () {
  describe("5 # Assignment 5: Dates", function () {

    it("Leap year", function () {
      assert.ok(isLeapYear(2016));
      assert.ok(!isLeapYear(2017));
      assert.ok(!isLeapYear(1997));
      assert.ok(isLeapYear(1996));
      assert.ok(!isLeapYear(1900));
      assert.ok(isLeapYear(2000));
    });

    it("number of days in month", function () {
      assert.strictEqual(numberOfDaysInMonth(2017, 2),28);
      assert.strictEqual(numberOfDaysInMonth(2016, 2),29);
      assert.strictEqual(numberOfDaysInMonth(1996, 7),31);
    });

    it("number of days in year", function () {
      assert.strictEqual(numberOfDaysInYear(1997), 365);
      assert.strictEqual(numberOfDaysInYear(1996), 366);
    });

    it("Number of day", function () {
      assert.strictEqual( numberOfDay(2017, 12, 31), 365);
      assert.strictEqual( numberOfDay(2016, 12, 31),366);
      assert.strictEqual( numberOfDay(2016, 1, 1),1);
      assert.strictEqual( numberOfDay(2017, 3, 31),90);
      assert.strictEqual( numberOfDay(2016, 3, 31), 91);
    });

    it("Date diff", function () {
      assert.strictEqual( dayDifference(2017, 1, 1, 2017, 1, 1), 0);
      assert.strictEqual( dayDifference(2017, 1, 1, 2017, 1, 2), 1);
      assert.strictEqual( dayDifference(2017, 1, 1, 2017, 1, 3), 2);
      assert.strictEqual( dayDifference(2015, 4, 1, 2017, 3, 31), 730);
      assert.strictEqual( dayDifference(2017, 3, 31, 2015, 4, 1), -730);
      assert.strictEqual( dayDifference(2017, 1, 1, 2017, 3, 31), 89);
      assert.strictEqual( dayDifference(2017, 3, 31, 2017, 1, 1), -89);
      assert.strictEqual( dayDifference(2016, 1, 1, 2016, 3, 31), 90);
      assert.strictEqual( dayDifference(2016, 3, 31, 2016, 1, 1), -90);
    });


  });

});
