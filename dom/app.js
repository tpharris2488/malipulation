//Obj 1
addEventListener("DOMContentLoaded", button);
function button() {
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Click Me!");
    button.appendChild(buttonText);
    document.body.appendChild(button);
    addEventListener("click", click);
    function click() {
        alert("message")
    }
}

//Obj 2
let button2 = document.getElementById("button2");
button.addEventListener("click", click);
function click() {
    let message = document.getElementById("text-box").value;
    alert(message);
}

// Obj 3
let div = document.getElementById("div");
div.addEventListener("mouseenter", function() {
    div.style.backgroundColor = "green";
})
div.addEventListener("mouseleave", function() {
    div.style.backgroundColor = "blue";
})


// Obj 4
let p = document.getElementById("p");
p.addEventListener("click", function() {
    let allchar = "0123456789ABCDEF";
    let randcol = "";
    for (let i = 0; i < 6; i++) {
        randcol += allchar[Math.floor(Math.random() * 16)];
    }
    p.style.color = "#" + randcol;
})


//obj 5
let button3 = document.getElementById("button3");
let div2 = document.getElementById("div2");
button.addEventListener("click", function() {
    let span = document.createElement("span");
    div.appendChild(span);
    let text = document.createTextNode("Evan");
    span.appendChild(text);
})

//obj 6
let friends = ["Shane", "LaMelo", "Ben", "Frank", "Gunna", "Pooh", "Jack", "Brody", "Paul", "George"];
let button4 = document.getElementById("button4");
let ul = document.getElementById("ul");
button.addEventListener("click", function () {
    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement("li");
        let name = document.createTextNode(friends[i]);
        li.appendChild(name);
        ul.appendChild(li);
    }
});