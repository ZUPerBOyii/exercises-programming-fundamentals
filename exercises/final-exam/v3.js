/*
Measurements contain a `date` and a value for temperature and one for humidity.
Example:

    {
        date: { year: 2023, month: 1, day: 3 },
        temperature: 6,
        humidity: 45.604
    }

All measurements of a year are kept in one large array (so up to 365 or 366 measurements, although the number of measurements in a given array shouldn't really matter)

Write a function `summarizePerWeek` taking in an array containing a full year's measurements and turns them into a weekly summary.
Safely assume that measurements are ordered by date and no gaps exists in the dates.
Also, just assume (to make things easier) that the first measurement starts at the beginning of a week.
Basically this boils down to summarizing the measurements in groups of 7, taking the highest and lowest values over that week (those 7 days).
Return those weekly summaries as an array (containing 53 (365/7=52.14) elements).

Dates thus get ignored, but for each wek we need to know minimum and maximum values for both temperature and humidity.
Example:

    [
        { // first week
            temperature: { min: -2, max: 15 },
            humidity: { min: 4.1319556493686616, max: 90.25727363205631 }
        },
        { // second week
            temperature: { min: -1, max: 16 },
            humidity: { min: -4.40073592006109, max: 79.24763752639248 }
        },
        { // third week
            temperature: { min: 4, max: 23 },
            humidity: { min: 18.56039790570479, max: 64.49477809809375 }
        },
        { // fourth week
            temperature: { min: -3, max: 24 },
            humidity: { min: -0.48482496460599656, max: 88.70471719273642 }
        },
        ... // other weeks.
    ];

Finally complete the function `showInfo()`, printing the coldest temperature and the highest humidity.
**No** tests for `showInfo` of course because it's writing to the screen instead of returning something.

Feel free to use `generateDemoData()` to generate fake/test data for a full year.
The tests are using this same function.
*/

/* Given code: do not change */
function generateDemoData() {
  let demoData = [];
  let DAYS_PER_MONTH = [undefined, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let month = 1; month <= 12; month++) {
    for (let day = 1; day <= DAYS_PER_MONTH[month]; day++) {
      demoData.push({
        date : {year:2023, month:month, day:day},
        temperature: Math.round((Math.random() * 30) - 5),
        humidity: (Math.random() * 100) - 5
      });
    }
  }
  return demoData;
}
/* End Given code: do not change */



function summarizePerWeek(){
  let weeklySummary = [];
  for (let i = 1; i <= 53; i++){
    weeklySummary.push(generateDemoData());

  }

  return weeklySummary;

}

/* Given code: improve */
function showInfo(data) {  // 2
  const count = data.length;
  const coldest = "<put your result/computation here>";
  const wettest = "<put your result/computation here>";
  console.log(count + " measurements executed");
  console.log("The coldest temperature in this data is " + coldest);
  console.log("The highest humidity in this data is " + wettest);
}
showInfo(generateDemoData());
/* End Given code: improve */

/*
Scoring: 6 points
`summarizePerWeek`: 2 points
`show`: 2 points
Style en structure: 2 points
 */
export {summarizePerWeek, generateDemoData};

