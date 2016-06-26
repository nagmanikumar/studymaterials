//alert("hello world");

//var name = prompt(" what is \n your name ? ");
//var hello = "hello hi"
//alert(hello + name);


/* var b = 20;

if (b > 10) {
    alert("true");
    if (b>15){
        alert("welcome");
    }
}
else {
    alert("false");
 }; */


/*var grade = "premium";

switch (grade) {
        case "regular":
                alert("10");
               break;
        case "premium":
                alert("20");
              break;
        case "daily":
                alert("30");
              break;
            default:
                alert("50");
} */


/*function myAddFunction(){
    var a = 50;
    var b = 20;
    var c = 30;
    var d = a+b+c;
    alert("Total Value is : " +d);
}
myAddFunction();

*/



/*function myfunction(a,b,c){
		var result = a+b;
		alert(result);
}

myfunction(10,20,30);
*/



/*function addTwoNumber(a,b){
		var result = a+b;
		return result;
}

var x = addTwoNumber(100,20);

alert(x);
*/

/*var a = 2;

while (++a < 10){
		alert(a);
		a++;
}*/

/*var amount = 0;
var i = 1;

while( i <= 10 ){
		amount = amount + 100;
		i++;
}
alert("The amount is :" +amount);
*/

/*var amount=0;
for(var i=1; i<=10; i++){
		amount = amount +100;
}
alert("The amount is :" +amount);

*/

/*var foo = "55";
var myNumber = Number(foo);

function Number(){
		
}

if(isNaN(myNumber)){
		alert("Is not a number");
}
else{
		alert("is a number");
}*/


/*var phrase = "This is a number";
alert(phrase.toUpperCase());*/

/*var strng1 = "hello how are you";
var strng2 = "hello how are you";

if(strng1.toLowerCase() == strng2.toUpperCase()){
		alert("Yes equal");
}
else{
		alert("No Not equal");
}*/

/*var phrase = "This is a new keyword test";
var position = phrase.indexOf("keyword");

if(phrase.indexOf("DDDD")== -1){
		alert("not equal");
}*/


/*var myArray = [10,"a",20,30,40];

alert(myArray.length);
*/


var myText = document.getElementById("paratag");

paratag.onclick = function(){
		paratag.innerHTML = "You clicke me";
}



