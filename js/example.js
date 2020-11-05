// ADD NEW ITEM TO END OF LIST

var lastItem = document.createElement("li");
var lastText = document.createTextNode("cream");
lastItem.appendChild(lastText);

document.getElementsByTagName("ul")[0].appendChild(lastItem);






// ADD NEW ITEM START OF LIST
var firstItem= document.createElement("li");
var firstText= document.createTextNode("kale");

firstItem.appendChild(firstText);

var list= document.getElementsByTagName("ul")[0];

list.insertBefore(firstItem, list.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS

var style = document.querySelectorAll("li");
for (i=0; i<6;i++){
 style[i].setAttribute("class", "cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var listNumber =document.querySelectorAll("li");
var count = listNumber.length;

var counter = document.createElement("span");
var counterText = document.createTextNode(count);
counter.appendChild(counterText);
document.getElementsByTagName("h2")[0].appendChild(counter);
