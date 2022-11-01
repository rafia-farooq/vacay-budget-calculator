var info = document.querySelector(".trip-info");
var answer = document.querySelector(".daily-budget");

info.addEventListener("click", function () {
  var budget = Number(prompt("Total Budget"));
  var cost = Number(prompt("Acommodation Cost"));
  var days = Number(prompt("Number of days"));
  calculate(budget, cost, days);
});

var calculate = function (budget, cost, days) {
  var result = ((budget - cost) / days).toFixed(2);
  answer.innerHTML = `Your daily budget is $${result}`;
};

// Solution code from Skillcrush

// var tripInfo = function () {
//   var budget = Number(prompt("Total Budget"));
//   var cost = Number(prompt("Acommodation Cost"));
//   var days = Number(prompt("Number of days"));
//   calculate(budget, cost, days);
// };

// var calculate = function (budget, cost, days) {
//   var daily = ((budget - cost) / days).toFixed(2);
//   answer.innerHTML = `You can spend daily $${daily}`;
// };

// info.addEventListener("click", tripInfo());
