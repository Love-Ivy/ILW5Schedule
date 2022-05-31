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
  let timeblock = timeblocks[i].id;
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

//Populate from local storage
function loadTask() {
  for (let i = 0; i < timeblocks.length; i++) {
    let timeblock = timeblocks[i];
    let usertb = timeblock.children[1];
    let utjson = localStorage.getItem(usertb.id);
    let userparse = JSON.parse(utjson);
    if (userparse !== null) {
      usertb.value = userparse;
    }
  }
}

//Save button functions
var savebuttons = document.getElementsByClassName("saveBtn");
for (let i = 0; i < savebuttons.length; i++) {
  savebuttons[i].addEventListener("click", saveTask);
}

//Save tasks to localstorage
function saveTask(event) {
  let usertb = event.target.parentElement.children[1];
  let usertext = usertb.value;
  let utjson = JSON.stringify(usertext);
  localStorage.setItem(usertb.id, utjson);
}

loadTask();
