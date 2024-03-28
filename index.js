// Here we make numArr a global variable
// Reason for this is so when generating a number we want unique nums, so it is simpler to create and populate
// the array, then randomly select one by one
let numArr = [];
for (let i = 0; i < 50; i++) {
  numArr.push(i + 1);
}

function rng() {
  // getting random position of number in the array
  let randIndex = Math.floor(Math.random() * numArr.length);
  // check if array is empty. If it is, house wins, because house board also has 50 numbers. Disabling rng button
  if (numArr.length == 0) {
    document.getElementById("rngButton").disabled = true;
    alert("House wins");
  }
  // Actually retrieving a number from array using random index position calculated above
  let randomNum = numArr[randIndex];
  // removing it from the array
  numArr.splice(randIndex, 1);
  console.log(randomNum);
  //console.log(numArr); - uncomment this to see array lose one number every time rng button is pushed
  // Getting list of all squares with square class, this will help you with your function, simply add class of square
  // to your created square
  let squares = document.querySelectorAll(".square");
  // Remember arrays are 0 based indexing, so we need to - 1 from randomNum to match it to correct squares number
  squares[randomNum - 1].classList.add("highlight");
}

function generateMainBoard() {
  // reference main board div
  let mainBoard = document.getElementById("main-board");
  for (let i = 0; i < 50; i++) {
    // Creating and adding text within for loop so we can append squares to mainBoard
    let square = document.createElement("div");
    square.classList.add("square");
    square.innerText = i + 1;
    mainBoard.appendChild(square);
  }
}

generateMainBoard();

// Here are the steps to follow:
// 1. Use the logic from generateMainBoard() to generate user boards

// 2. Number of user boards is reliant on value of input field

// 2.1 So when clicking generate user boards button, a certain amount of user boards must be generated according to input
// field value

// 3. Add highlight class to user board squares so these squares are highlighted like main board if rng returns a number
// in one of the squares

// 4. Handle end game logic. I've used a cheap way of checking if house wins by simply checking length of number array, but you
// need to check user squares directly to see if they've all highlighted and won!

// 5. Handle end game logic any way you like!

// 6. Add your own styling!

// BONUS: Make a function for generating a board, and adjust it to suit your needs. eg. when generating for main board,
// generate 50, but when calling the function to generate user boards, generate 25 etc.
