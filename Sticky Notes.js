//DOM html
var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0]; //*add[0]
console.log(container3)
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
console.log(xIcon)
var i = 0;

xIcon.addEventListener("click", typeNote); //dont use typeNote() here
checkIcon.addEventListener("click", createNote);
checkIcon.addEventListener("click", function() {
    document.getElementById("note-text").value='';
});

function typeNote() { //be used for both in html and DOM html (use one function controls two operations)
    if (container3.style.display == "none") {
        container3.style.display = "block";
    } else {
        container3.style.display = "none";
    }
}

function createNote() {
    var noteText = document.getElementById("note-text").value;
    //create two elements: Div and h1(contains the note)
    var node0 = document.createElement("div");
    var node1 = document.createElement("h1");

    node1.innerHTML = noteText;
    node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; overflow:hidden; box-shadow: 0px 10px 24px rgba(0,0,0,0.75)");
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();
    node0.appendChild(node1);
    node0.addEventListener('mouseenter',function(){
        node0.style.transform = "scale(1.1)";
    });
    node0.addEventListener('mouseleave',function(){
        node0.style.transform = "scale(1)";
    });
    node0.addEventListener('dblclick',function(){
        node0.remove();
    });
    container2.insertAdjacentElement("beforeend", node0);
}

//create these functions to make each sticy note looks different(fun!)
function margin() {
    var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
    return random_margin[Math.floor(Math.random()*random_margin.length)] //generate a random margin
}

function rotate() {
    var random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)",
     "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"];
    return random_rotate[Math.floor(Math.random()*random_rotate.length)]
} 

function color() {
    var allColor = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"];
    if (i>allColor.length-1) {
        i=0;
    }
    return allColor[i++]
}
