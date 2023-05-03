//========================Date and time on header============================
// //setting time with DayJS
// $('#currentDay').text(dayjs());

// currentDate = $("#currentDay")
// //update display to the following format
// function todaysDate (){
//   currentDate.text(dayjs().format("[Today is] dddd, MMM DD, YYYY,HH:mm:ss"));
// }
// todaysDate();
// //update time evey second
// setInterval(todaysDate, 1000);


function displayTime(){
var today = dayjs();
//Day of the week today 
var dayWeek = today.format("[Today is] dddd, MMM DD, YYYY");
$('#currentDay').text(dayWeek);
//Current time
var currentTime = today.format("HH:mm:ss")
$('#time').text(currentTime);
}
displayTime()

setInterval(displayTime, 1000);

//========================set local storage==================================

$(document).ready(function () {
// listen for save button clicks
    $(".saveBtn").on("click", function () {
// get nearby values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
// save in localStorage
      localStorage.setItem(time, value);
});
  
//=============function to change background color based on time=============
  
function changeBackground() {
  var currentHour = dayjs().format("H");
//console.log(currentHour)

 $("textarea.description").each(function (i) {  //The each() method specifies a function to run for each matched element
  var inputTime = parseInt($(this).attr("id")); //parseInt Converts a string to an integer
//console.log(inputTime)

//if the time is < than currentHour add PAST class to time block class
      if (inputTime < currentHour) {$(this).addClass("past");
//else if time === currentHour add PRESENT class to time block
      } else if (inputTime == currentHour) {$(this).addClass("present");
//else add FUTURE class to time block
      } else {$(this).addClass("future");
      }
    })
}
changeBackground()

// // load any saved data from localStorage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

// set up interval to check if current time needs to be updated
setInterval(changeBackground, 1000);

});