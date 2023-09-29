// example 1 - MAP
const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
    return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml;

// example 2 - MAP
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

document.getElementById("myList").innerHTML += `<br><br> ${gpaPoints}`;


// example 3 - REDUCE

const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;
document.getElementById("myList").innerHTML += `<br><br> ${gpa}`;
console.log(gpa)
// example 2
// this is the same thing as above, but with an arrow function
//const pointsTotal = gpaPoints.reduce((total, item) => total + item);
//const gpa = pointsTotal / gpaPoints.length;

// this could be further simplified as
//const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;


// example 4 - FILTER
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length > 6;
});
document.getElementById("myList").innerHTML += `<br><br> ${shortWords}`;
//same thing with an arrow function
//const shortWords = words.filter((word) => word.length < 6);

//example 5 - INDEX OF
// improved luckyNumber
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
document.getElementById("myList").innerHTML += `<br><br> ${luckyIndex}`;