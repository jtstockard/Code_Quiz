var wrapper = document.querySelector("#wrapper");
var questions = document.querySelector("#questions");
var timer = document.querySelector("#startTime");
var currentTime = document.querySelector("#currentTime");

var score = 0;
var questionNo = 0;
var timeLeft = 60;
var defaultTime = 0;
var penalty = 10;

timer.addEventListener("click", function () {
  if (defaultTime === 0) {
    defaultTime = countdown(function () {
      timeLeft--;
      currentTime.textContent = "Time: " + timeLeft;

      if (timeLeft <= 0) {
        clearTimeout(defaultTime);
        currentTime.textContent = "Time Over!";
      }
    });
  }
  1000;
});
