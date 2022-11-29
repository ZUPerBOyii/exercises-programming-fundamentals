/*
# Symptoms (exam 2020-2021)
This whole assignment is about logbooks of patients, in which
one can see whether or not the patient showed symptoms on any give date.

`{"date": "2021/12/31", "symptoms": False}` implies that the patient
did not show any symptoms on the thirty-first of December.

`{"date": "2021/12/31", "symptoms": True}` implies that the patient
did show symptoms on the thirty-first of December.

One such piece of information is what we call an entry
(pl.: entries) in this assignment.

You can assume that the entries in these logbooks are **always sorted
by date** and that the logbooks are complete. Here, complete means
that you will find one entry for every day between the start date
and the and date. In other words, the dates in these entries do not
show any holes or jumps.

Using such a logbook with the history of symptoms, we can partition
the entries in three periods: incubation, sickness, and recovered.
If you do not understand, we can show you an example table that
visualizes this exactly.

===

Write the function `getIncubationDays(patientLogbook)`
which returns the array of entries before the first symptom presented itself.
Make sure the order of entries does not change.

Write the function `getSicknessDays(patientLogbook)`
which returns the array of entries between the first symptom
and the last symptom presented themselves.
Make sure the order of entries does not change.

Write the function `getRecoveredDays(patientLogbook)`
which returns the array of entries after the last symptom presented itself.
Make sure the order of entries does not change.

## Remark:
Keep the general guidelines into account
(only use studied techniques and mind your coding style).
*/
function getEntries(log, from ,to) {
  const res = [];
  for (let i = from; i < to; i++) {
    res.push(log[i]);
  }
  return res;
}

function getRecoveredDays(log) {
  let from = indexOfLastSymptomaticDay(log);
  if(isNaN(from)) from = log.length;
  const to = log.length;
  return getEntries(log, from+1, to);
}

function getSicknessDays(log) {
  const from = indexOfFirstSymptomaticDay(log);
  const to = indexOfLastSymptomaticDay(log);
  return getEntries(log, from, to+1);
}

function getIncubationDays(log) {
  const from = 0;
  let to = indexOfFirstSymptomaticDay(log);
  if (isNaN(to)) to = 0;
  return getEntries(log, from, to);
}

export {getIncubationDays, getSicknessDays, getRecoveredDays};
