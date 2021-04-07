//global scope variables
var wrapper = document.querySelector("#wrapper");
var questionsDiv = document.querySelector("#questions");
var timer = document.querySelector("#startTime");
var currentTime = document.querySelector("#currentTime");
var createUl = document.createElement("ul");
//numeric values
var score = 0;
var questionNo = 0;
var timeLeft = 60;
var defaultTime = 0;
var penalty = 10;

//question template
var questions = [
  {
    title: "Which of the following solves for conditions?",
    choices: ["For loop", "Return", "If statement", "Switch"],
    answer: "If statement",
  },
  {
    title: "This is used to store multiple elements in a single variable",
    choices: ["Array", "String", "Function", "Scope"],
    answer: "Array",
  },
  {
    title: "var x; what would this variable be described as?",
    choices: ["Number", "Object", "String", "Undefined"],
    answer: "Undefined",
  },
  {
    title: "Which of the following cases is best used in CSS?",
    choices: ["PascalCase", "kebab-case", "snake_case", "camelCase"],
    answer: "kebab-case",
  },
  {
    title: "This method is used to remove the last element in an array",
    choices: ["Push", "Reduce", "Pop", "Slice"],
    answer: "Pop",
  },
];
// A timer function to start and reset the quiz
timer.addEventListener("click", function () {
  if (defaultTime === 0) {
    defaultTime = countdown(function () {
      timeLeft--;
      currentTime.textContent = "Time: " + timeLeft;

      if (timeLeft <= 0) {
        clearTimeout(defaultTime);
        currentTime.textContent = "Time Over!";
      }
    }, 1000);
  }
  render(questionsIndex);
});
// function to show questions on screen and add elements that have an event clicker
function render(questionsIndex) {
  questionsDiv.innerHTML = "";
  createUl.innerHTML = "";

  for (i = 0; i < questions.length; i++) {
    var userQuestion = questions[questionsIndex].title;
    var userChoices = questions[questionindex].choices;
    questionsDiv.textContent = userQuestion;
  }
  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsDiv.appendChild(createUl);
    createUl.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}
//function to compare elements of the questions arrays and add score or subtract time
function compare(event) {
  var element = event.target;

  if (element.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    //this calls back the answer in the array to distinguish right answers out of the text content
    if (element.textcontent == questions[questionindex].answer) {
      score++;
      createDiv.textContent = "Correct Answer!";
    } else {
      secondsLeft = secondsLeft - penalty;
      createDiv.textContent = "Incorrect, the answer is " + questions[questionIndex].answer;
    }
  }
  questionIndex++;

  if (questionsIndex >= questions.length) {
    createDiv.textContent = "Final score:" + score + "/" + questions.length;
  } else {
    render(questionIndex);
  }
  questionsDiv.appendChild(createDiv);
}
//function to append the high score to the last page and then store all info locally
