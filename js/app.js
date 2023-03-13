const fromSlider = document.getElementById("fromSlider");
const toSlider = document.getElementById("toSlider");

// rang min gap
let minGap = 0;

// from slider handle
fromSlider.addEventListener("input", function () {
  if (parseInt(toSlider.value) - parseInt(fromSlider.value) <= minGap) {
    fromSlider.value = parseInt(toSlider.value);
  }

  console.log("From", formattedDate(fromSlider.value));
});

// to slider handle
toSlider.addEventListener("input", function () {
  if (parseInt(toSlider.value) - parseInt(fromSlider.value) <= minGap) {
    toSlider.value = parseInt(fromSlider.value) + minGap;
  }

  console.log(formattedDate(toSlider.value));
});

// get date value from input and return calculated date value
function formattedDate(range) {
  const dateCalFrom = "21-Jul-2020";
  // date difference
  const dayDiff = dateToDayDifference(dateCalFrom) / 100;

  // generate new date from range value
  const newDate = parseInt(range * dayDiff);

  // return formatted date
  let inputDate = dayToDate("2020-07-21", newDate);
  return inputDate;
}

/**
 * starting date : "2020-07-21"
 * end date (optional): "2023-07-21"
 * @param {starting date} startDay
 * @param {end date(optional) default current date} endDay
 * @returns day
 */
// difference day
function dateToDayDifference(startDay, endDay) {
  const dayInMillis = 86400000; // Number of milliseconds in a day

  const date1 = startDay ? new Date(startDay) : new Date();
  const date2 = endDay ? new Date(endDay) : new Date();

  const diffInMillis = date2.getTime() - date1.getTime();
  const diffInDays = Math.floor(diffInMillis / dayInMillis);
  return diffInDays;
}

/**
 * starting date : "2020-07-21"
 * add day : 965
 * return format : 13-Mar-2023
 * @param {starting date} startDate
 * @param {add day} daysToAdd
 * @returns date
 */

// day to date difference
function dayToDate(startDate, daysToAdd) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const futureDate = startDate ? new Date(startDate) : new Date();
  futureDate.setDate(futureDate.getDate() + daysToAdd);

  const year = futureDate.getFullYear();
  const month = ("0" + (futureDate.getMonth() + 1)).slice(-2);
  const day = ("0" + futureDate.getDate()).slice(-2);

  const formattedDate = `${day}-${months[parseInt(month - 1)]}-${year}`; // Output: the date 965 days from today's date, in the format "DD-MM-YYYY"
  return formattedDate;
}

// notes
/*
    "21-Jul-2020" to "13-Mar-2023"
    day, month, year

    percentage = 0 - 100

    "21-Jul-2020" to "13-Mar-2023" difference day 965

    965 day to date is 13-03-2023

    diff = dayDifference/100
    range * diff
  */
