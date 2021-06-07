const allElements = document.querySelectorAll('.SingleBlock');

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');

var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');

var setImage = "cross";

allElements.forEach(item => {
  item.addEventListener('click', event => {

    var grabbedElement = event.target;


    if(setImage == "cross"){
      insertZero(grabbedElement);
      checkMatch();
      setImage = "zero"
    }
    
    else{
      insertCross(grabbedElement);
      checkMatch();
      setImage = "cross";
    }

  });
});


function insertCross(grabbedElement){ 
  grabbedElement.style.backgroundImage = "url('images/cross.png')"; 
  grabbedElement.setAttribute("data-value" , "cross");
  grabbedElement.style.pointerEvents = "none";  
}

function insertZero(grabbedElement){
  grabbedElement.style.backgroundImage = "url('images/zero.png')";
  grabbedElement.setAttribute("data-value" , "zero");
  grabbedElement.style.pointerEvents = "none";
       
}


//checking if there is a match or not 
function checkMatch(){

   //row wise companrison
if(one.getAttribute("data-value") == two.getAttribute("data-value") && two.getAttribute("data-value") == three.getAttribute("data-value")){
     
    if(two.style.backgroundImage == "url(\"images/zero.png\")"){
     document.getElementById('result').innerHTML = "Zero Wins !!!";
     disableAll();
    }
    else{
     document.getElementById('result').innerHTML = "Cross Wins !!!";
     disableAll();
    }

    console.log("1");

}

else if(four.getAttribute("data-value") == five.getAttribute("data-value") && five.getAttribute("data-value") == six.getAttribute("data-value")){
    if(five.style.backgroundImage == "url(\"images/zero.png\")"){
     document.getElementById('result').innerHTML = "Zero Wins !!!";
     disableAll();
    }
    else{
     document.getElementById('result').innerHTML = "Cross Wins !!!";
     disableAll();
    }
    console.log("2");
}

else if(seven.getAttribute("data-value") == eight.getAttribute("data-value") && eight.getAttribute("data-value") == nine.getAttribute("data-value")){
    if(eight.style.backgroundImage == "url(\"images/zero.png\")"){
     document.getElementById('result').innerHTML = "Zero Wins !!!";
     disableAll();
    }
    else{
     document.getElementById('result').innerHTML = "Cross Wins !!!";
     disableAll();
    }
    console.log("3");
}

   //column wise comparison
else if(one.getAttribute("data-value") == four.getAttribute("data-value") && four.getAttribute("data-value") == seven.getAttribute("data-value")){
    if(four.style.backgroundImage == "url(\"images/zero.png\")"){
     document.getElementById('result').innerHTML = "Zero Wins !!!";
     disableAll();
    }
    else{
     document.getElementById('result').innerHTML = "Cross Wins !!!";
     disableAll();
    }
    console.log("4");
}

else if(two.getAttribute("data-value") == five.getAttribute("data-value") && five.getAttribute("data-value") == eight.getAttribute("data-value")){
    if(five.style.backgroundImage == "url(\"images/zero.png\")"){
     document.getElementById('result').innerHTML = "Zero Wins !!!";
     disableAll();
    }
    else{
     document.getElementById('result').innerHTML = "Cross Wins !!!";
     disableAll();
    }
    console.log("5");
}

else if(three.getAttribute("data-value") == six.getAttribute("data-value") && six.getAttribute("data-value") == nine.getAttribute("data-value")){
    if(six.style.backgroundImage == "url(\"images/zero.png\")"){
     document.getElementById('result').innerHTML = "Zero Wins !!!";
     disableAll();
    }
    else{
     document.getElementById('result').innerHTML = "Cross Wins !!!";
     disableAll();
    }
    console.log("6");
}

   //diagonal comparison
else if(one.getAttribute("data-value") == five.getAttribute("data-value") && five.getAttribute("data-value") == nine.getAttribute("data-value")){
    if(five.style.backgroundImage == "url(\"images/zero.png\")"){
     document.getElementById('result').innerHTML = "Zero Wins !!!";
     disableAll();
    }
    else{
     document.getElementById('result').innerHTML = "Cross Wins !!!";
     disableAll();
    }
    console.log("7");
}

else if(three.getAttribute("data-value") == five.getAttribute("data-value") && five.getAttribute("data-value") == seven.getAttribute("data-value")){
    if(five.style.backgroundImage == "url(\"images/zero.png\")"){
     document.getElementById('result').innerHTML = "Zero Wins !!!";
     disableAll();
    }
    else{
     document.getElementById('result').innerHTML = "Cross Wins !!!";
     disableAll();
    }
    console.log("8");
}

else{
  return;
}

}

function disableAll(){

allElements.forEach(item => {
  
  item.style.pointerEvents = "none";
  item.style.opacity = "0.5";

  }
)
}


function resetGame(){

 var values = ["one" , "two" , "three" , "four" , "five" , "six" , "seven" , "eight" , "nine"];

 for(var i = 0 ; i<9 ; i++){
	allElements[i].setAttribute("data-value" , values[i]);
 }


 allElements.forEach(item => {
  
  item.style.backgroundImage = "none"; 
  item.style.pointerEvents = "auto";
  item.style.opacity = "1.0";

  }
)
document.getElementById('result').innerHTML = "";
}


