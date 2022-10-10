//global variables

var oneBtn = document.querySelector("#oneBtn");
var twoBtn = document.querySelector("#twoBtn");
var threeBtn = document.querySelector("#threeBtn");
var prevBtn = document.querySelector("#prevBtn");
var nextBtn = document.querySelector("#nextBtn");
var page1 = document.querySelector("#page1");
var page2 = document.querySelector("#page2");
var onPage = "";

//event listener

oneBtn.addEventListener("click", showPageOne);
twoBtn.addEventListener("click", showPageTwo);
// threeBtn.addEventListener("click", showPageThree);
prevBtn.addEventListener("click", showPrevPage);
nextBtn.addEventListener("click", showNextPage);

//functions
function showPageOne() {
    page1.style.display = "flex";
    page1.style.flexDirection = "column";
    page2.style.display = "none";
    onPage = 1;
    console.log(onPage);
}

function showPageTwo() {
    page1.style.display = "none";
    page2.style.display = "flex";
    page2.style.flexDirection = "column";
    onPage = 2;
    console.log(onPage);
}

function showPrevPage() {
    if (onPage == 1) {
        showPageOne();
    } if (onPage == 2) {
        showPageOne();
    }
}

function showNextPage() {
    if (onPage == 1) {
        showPageTwo();
    } if (onPage == 2) {
        showPageTwo();
    }
}
