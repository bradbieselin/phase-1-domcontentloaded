// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
    let text = document.querySelector("p");
    console.log("Text before: " + text)
    text.textContent = "This is really cool!";
    console.log("Text now: " + text)
})