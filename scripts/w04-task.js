/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Lizandro Vivanco",
    photo: "images/IMG_20211214.jpg",
    favoriteFoods: [
        "Ceviche",
        "Pollo a la Brasa",
        "Lomo Saltado",
        "Aji de Gallina",
        "Anticuchos"
    ],
    hobbies: [
        "Play Soccer",
        "Play Guitar",
        "Videogames",
        "Watch Movies"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Ica, Peru",
        length: "6 months"
    }
);

myProfile.placesLived.push(
    {
        place: "Pisco, Peru",
        length: "3 months"
    }
);

myProfile.placesLived.push(
    {
        place: "VES, Peru",
        length: "8 months"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("img").setAttribute("src", myProfile.photo);
document.querySelector("img").setAttribute("alt", `Profile image of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(element => {
    let li = document.createElement("li");
    li.textContent = element;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(element => {
    let li = document.createElement("li");
    li.textContent = element;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(element => {
    let dt = document.createElement("dt");
    dt.textContent = element.place;
    let dd = document.createElement("dd");
    dd.textContent = element.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});
