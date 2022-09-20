/*
Implements the functions
`isLeapYear`,
`numberOfDaysInMonth`,
`numberOfDaysInYear`,
`numberOfDay` (compute the number of days until this day in a given year), and
`dayDifference`
such that all tests succeed.

If the functionality you need already exists in
(a) JavaScript (library), try to implement it yourself.
The exercise here is to write code, not to borrow it.
*/

const NUMBER_OF_DAYS_IN_MONTH = {
  true: [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],  // leap year
  false: [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]  // non leap year
};

export {isLeapYear, numberOfDaysInYear, numberOfDaysInMonth, numberOfDay, dayDifference};
