let password = prompt("What is the password?");

while (password !== "Cleveland") {
  password = prompt("Incorrect. What is the password?");
}

let classSize = parseInt(prompt("How many students are in your class?"));

//console.log(typeof classSize);

//let studentName = "";

let nameList = "";

for (let i = 0; i < classSize; i++) {
  let studentName = prompt("What is the student's name?");
  nameList += "<li>" + studentName + "</li>";
}

document.querySelector("ul").innerHTML = nameList;