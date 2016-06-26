var newHeading = document.createElement("h1"); 
var newParagraph = document.createElement("p");

//newHeading.innerHTML = " i am new h1 text";
//newParagraph.innerHTML = " i am new paragraph text";


var h1Text = document.createTextNode(" i am new h1 text ");
var paraText = document.createTextNode(" i am new para text ");

newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);


document.getElementById("trivia").appendChild(newHeading);
document.getElementById("trivia").appendChild(newParagraph);