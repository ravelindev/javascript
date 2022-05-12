/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
var myInfo = {

// Step 2: Inside of the object, add a property named name with a value of your name as a string
    name: "Rudy Ravelin",

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo: "images/rudy.png",

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods: ["Pizza", "Pasta", "Sushi", "Steak", "Chicken", "Fish"],

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: ["Reading", "Watching Movies", "Playing Video Games"],

// Step 6: Add another property named placesLived with a value of an empty array
    placesLived: [],
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
    placesLived: [{ place: "", length: "" }],

// Step 8: For each property, add appropriate values as strings
    placesLived: [{ place: "San Francisco", length: "5 years" }],

// Step 9: Add additional objects with the same properties for each place you've lived
    placesLived: [{ place: "San Francisco", length: "5 years" }, { place: "New York", length: "2 years" }, { place: "Los Angeles", length: "3 years" }],
};


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").innerHTML = myInfo.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").src = myInfo.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").alt = myInfo.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
for (var i = 0; i < myInfo.favoriteFoods.length; i++) {

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    document.getElementById("favorite-foods").appendChild(document.createElement("li")).innerHTML = myInfo.favoriteFoods[i];
}
// Step 6: Repeat Step 4 for each hobby in the hobbies property
for (var i = 0; i < myInfo.hobbies.length; i++) {
    document.getElementById("hobbies").appendChild(document.createElement("li")).innerHTML = myInfo.hobbies[i];
}

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
for (var i = 0; i < myInfo.placesLived.length; i++) {
    document.getElementById("places-lived").appendChild(document.createElement("li")).innerHTML = myInfo.placesLived[i].place;
}


// Step 8: For each object in the <em>placesLived</em> property:
for (var i = 0; i < myInfo.placesLived.length; i++) {

// - Create an HTML <dt> element and put its place property in the <dt> element
    document.getElementById("places-lived").appendChild(document.createElement("dt")).innerHTML = myInfo.placesLived[i].place;
// - Create an HTML <dd> element and put its length property in the <dd> element
    document.getElementById("places-lived").appendChild(document.createElement("dd")).innerHTML = myInfo.placesLived[i].length;

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
}
