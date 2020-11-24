//DOM html
var container3 = document.getElementsByClassName("container3")[0];
var container2 = document.getElementsByClassName("container2")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var colorIndex=0;
var marginIndex=0;
var rotateIndex=0;

function start() {
    for ( var i = 0; i < localStorage.length; i++) { //run loop each time refresh page
        var value = localStorage[i]
        console.log(value)
        displaySticky(i,value)  //Post each stickiy currently in local storage 
        }
    

    xIcon.addEventListener("click", typeNote); //dont use typeNote() here
    checkIcon.addEventListener("click", createSticky);
    // document.getElementById("note-text").value='';


    function createSticky() {
        var value = document.getElementById("note-text").value;
        var key = localStorage.length;
        localStorage.setItem(key, value);
        displaySticky(key,value);
        document.getElementById("note-text").value=''; //set text area to blank
    }
}
start();

function displaySticky(key,value) {
    var node0 = document.createElement("div");
    var node1 = document.createElement("h1");
    node1.innerHTML = value;
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
    node0.addEventListener('dblclick', function(){
        removeSticky(key,node0)});
    container2.insertAdjacentElement("beforeend", node0);  
}

function removeSticky(key,node0) {
    container2.removeChild(node0);
    for ( var i = 0; i < localStorage.length; i++) { //run loop each time refresh page
        if (i>key) { // test to see if begins with 'sticky'
            var value = localStorage[i];
            var newKey = i-1;
            localStorage.setItem(newKey,value);
        }
    }
    localStorage.removeItem(localStorage.length-1);
}

function typeNote() { //be used for both in html and    DOM html (use one function controls two operations)
    if (container3.style.display == "none") {
        container3.style.display = "block";
    } else {
        container3.style.display = "none";
    }
}



function margin() {
    var allMargin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
    if (marginIndex>allMargin.length-1) {
        marginIndex=0;
    }   
    return allMargin[marginIndex++]
}

function rotate() {
    var allRotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)",
    "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"];
    if (rotateIndex>allRotate.length-1) {
        rotateIndex=0;
    }   
    return allRotate[rotateIndex++]
} 

function color() {
    var allColor = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"];
    if (colorIndex>allColor.length-1) {
        colorIndex=0;
    }   
    return allColor[colorIndex++]
}

