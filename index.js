// USER JOURNEY
// // INPUT MODE
// // User enters their name - stored in browser - browser stores that they have visited before
// // Also include a reset button to remove name and previous exercises
// // User enters which exercises they'll be doing today using buttons (stored into a text box)
// // Webpage creates a box for each workout with inputs to take in number of sets and number of reps with a start button
// // Once the site has verified that the sets and reps have been entered, the start button for that box will become pressable
// // When all workouts are complete - end workout button becomes available which will produce report

// // WORKOUT MODE
// // WHen user presses start, they are directed to a new page
// // Displays x'th set, y number of reps with a two buttons - COMPLETED or FAILED
// // COMPLETED = COUNT UP TO NEXT SET WITH BUTTON TO START
// // FAILED = How many did you do? Buttons for the numbers
// // COUNT UP TO NEXT SET WITH BUTTON TO START
// // For Final set:
// // COMPLETED = Go back to input mode with open text box under that workout for any notes
// // FAILED = How many did you do? Buttons for the numbers then go back to input mode with open text box under that workout for any notes

// // REPORT MODE
// // At the end of the workout, report is produced in a screenshotable format

// Variables
let userName;
let todaysExercises = [];

// Links to HTML
let userNameText = document.getElementById("userNameText")

// Button Listeners

// Functions
function startChecks () {
    userName = localStorage.getItem("userNameStorage");
    if (!userName) {
        userName = prompt(`Welcome! Please enter your name here.`)
        localStorage.setItem("userNameStorage",userName)
        userNameText.innerHTML = `Hello ${userName}!`;
    } else {
        userNameText.innerHTML = `Welcome back ${userName}!`;
    }
}

// Function Calls
startChecks();
