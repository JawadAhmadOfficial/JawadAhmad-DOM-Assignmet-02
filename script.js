// ================================
// Task 1: getElementById
// ================================
let headingById = document.getElementById("mainHeading");
console.log(headingById);
headingById.innerText = "DOM Element Selected by ID";


// ================================
// Task 2: getElementsByTagName
// ================================
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
paragraphs[0].innerText = "First paragraph updated";


// ================================
// Task 3: getElementsByClassName
// ================================
let buttons = document.getElementsByClassName("actionBtn");
console.log(buttons);
buttons[1].innerText = "Click Me";


// ================================
// Task 4: querySelector
// ================================
let headingQS = document.querySelector("h2");
console.log(headingQS);
headingQS.style.color = "blue";


// ================================
// Task 5: querySelectorAll
// ================================
let listItems = document.querySelectorAll("li");
console.log(listItems);

listItems.forEach(item => {
    item.style.color = "green";
});


// ================================
// Task 6: Style Change
// ================================
let styledPara = document.querySelector(".stylePara");
console.log(styledPara);

styledPara.style.fontSize = "20px";
styledPara.style.color = "white";
styledPara.style.backgroundColor = "black";
