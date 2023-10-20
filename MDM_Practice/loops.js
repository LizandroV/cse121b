
// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> elemen

// with .map
const foodsElement = document.querySelector('#favorite-foods');
// this function could also be written this way using a template literal:
function mapFoodItemSmall(food) {
  return `<li>${food}</li>`;
}
const foodListElements = myInfo.favoriteFoods.map(mapFoodItemSmall);
// we need to flatten the array of strings into one big string. .join does this.
foodsElement.innerHTML = foodListElements.join('');