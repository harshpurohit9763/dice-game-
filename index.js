var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imageSelect1 = "dice" + randomNumber1 + ".png";

var img_sorce = imageSelect1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", img_sorce)

// second image

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageSelect2 = "dice" + randomNumber2 + ".png";

var img_sorce = imageSelect2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", img_sorce)

//condition

if (randomNumber1 > randomNumber2) {

  document.querySelector("h1").innerHTML = "🔥 player 1 wins";

}if (randomNumber1 < randomNumber2) {

  document.querySelector("h1").innerHTML = "🔥 player 2 wins";

} if (randomNumber1 === randomNumber2) {

  document.querySelector("h1").innerHTML = "😲 its a draw";

}
