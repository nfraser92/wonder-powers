// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
// Have your developer tools open. When you click the button, the following element...

// <section id="flight" class="power disabled">
// Should then look like this.

// <section id="flight" class="power enabled"></section>




// document.querySelector("#activate-flight").addEventListener("click", (event) => {
//     flight.classList.toggle("enabled")
// })

// Targeting Buttons
const flightButton = document.getElementById("activate-flight");
const mindButton = document.getElementById("activate-mindreading");
const xRayButton = document.getElementById("activate-xray");

// Targeting element classes
const flightClass = document.querySelector("#flight")
const mindClass = document.querySelector("#mindreading")
const xRayClass = document.querySelector("#xray")

// Functions to toggle class
function flightHandlerFunction() {
    flightClass.classList.toggle("disabled")
    flightClass.classList.toggle("enabled")
}
function mindReadingFunctionFunction() {
    mindClass.classList.toggle("disabled")
    mindClass.classList.toggle("enabled")
}
function xRayFunction() {
    xRayClass.classList.toggle("disabled")
    xRayClass.classList.toggle("enabled")
}
// Invoking functions
flightButton.addEventListener("click", flightHandlerFunction)
mindButton.addEventListener("click", mindReadingFunctionFunction)
xRayButton.addEventListener("click", xRayFunction)


