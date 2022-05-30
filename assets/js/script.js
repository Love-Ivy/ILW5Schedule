// ## User Story

// ```md
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```

// ## Acceptance Criteria

// ```md
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```

//Create display of current time 'moment.js'
var day = moment().format("dddd");
var date = moment().format("MMM Do YYYY");
var hour = moment().format("h");
var minute = moment().format("m");
document.getElementById("currentDay").innerHTML = day + ", " + date;
document.getElementById("currentTime").innerHTML =
  hour + ":" + minute + " " + moment().format("A");

//Color code timeblocks
var timeblocks = document.getElementsByClassName("time-block");
var currentTime = moment().format("HH");
for (let i = 0; i < timeblocks.length; i++) {
  var timeblock = timeblocks[i].id;
  console.log(timeblocks[i]);
  if (timeblock < currentTime) {
    timeblocks[i].classList.add("past");
  }
  if (timeblock === currentTime) {
    timeblocks[i].classList.add("present");
  }
  if (timeblock > currentTime) {
    timeblocks[i].classList.add("future");
  }
}

//Save button functions
var savebuttons = document.getElementsByClassName("saveBtn");
for (let i = 0; i < savebuttons.length; i++) {
  savebuttons[i].addEventListener("click", saveTask);
}

//Save tasks to localstorage
function saveTask() {
  console.log("click");
}
