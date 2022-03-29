// //using the document to identify pieces of our website

// //These methods will return collections of every instance
// console.log(document.getElementsByTagName("h1"));
// console.log(document.getElementsByClassName("description"));

// //Will only return one thing
// console.log(document.getElementById("greet"));

// // querySelectors

// //Will return a node list, which is like an array, but can't use array methods
// console.log(document.querySelectorAll(".fruits li"));

// //returns the first thing that matches the search
// console.log(document.querySelector(".fruits li"));

//To Manipulate the DOM

let el = document.getElementById("greet");

console.log(el.innerHTML);

el.innerText = "Goodbye";

// let fruits = document.querySelectorAll(".fruits li");
// let fruits = document.querySelector(".fruits");

// for (let i = 0; i < fruits.length; i++) {
//   //   console.log(fruits[i].innerHTML);
//   fruits[i].innerText += "!";
// }

// console.log(fruits);

// fruits.style.color = "green";

function createRainbow() {
  let colors = document.querySelectorAll(".colors li");

  for (let i = 0; i < colors.length; i++) {
    console.log(colors[i].innerHTML);
    colors[i].style.color = colors[i].innerHTML;
  }
}

function test() {
  console.log("HI");
}

function add() {
  let el = document.querySelector(".score");
  el.innerHTML++;
}

function subtract() {
  let el = document.querySelector(".score");
  el.innerHTML--;
}
