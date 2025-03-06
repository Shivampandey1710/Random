// write your JavaScript code here
console.log("HELLO");
const btn = document.querySelector("#switchBtn");
const colorBox = document.querySelector("#colorBox");

btn.addEventListener("click", function() { // Anonymous function to call randomHexColor
  const hexColor = randomHexColor(); // Call the function and store the result
  colorBox.style.backgroundColor = hexColor; // Use the returned hex color
});

const randomHexColor = function() {
  const randomColor = Math.floor(Math.random() * 16777215);
  const hexColor = "#" + randomColor.toString(16).padStart(6, '0');
  return hexColor;
};