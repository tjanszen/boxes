function Box(name, color, id, x, y){
	this.name = name;
	this.color = color;
	this.x = x;
	this.y = y;
}

var boxArray = [];
var boxCounter = 0;

window.onload = init;

function init(){
	var generateButton = document.getElementById("generateButton")
	generateButton.onclick = generate;

	var clearButton = document.getElementById("clearButton");
	clearButton.onclick = clear;

}

 function clear(){
	//Delete all the div.box elements and reset boxCounter
	var divScene = document.getElementById("scene");
			while(boxCounter >= 0){
				divScene.removeChild(divScene.firstChild);
				boxCounter --;
			}
	//Reset the boxArray
	boxArray = [];

	var theForm = document.forms.data;
	theForm.reset();
}

function generate(){

	//Gather data values from the form inputs
	var theForm = document.forms.data;
	var boxName = data.elements.name.value;
	var boxColor = "";
	var boxAmount = "";

	//Get the radio button input value for amount
	var amountInput = data.elements.amount;
      		for (var i = 0; i < amountInput.length; i++) {
      			if(amountInput[i].checked){
      			boxAmount = parseInt(amountInput[i].value);
      			}
      		}
      	
      	//Get the radio button input value for color
      	var colorInput = data.elements.color;
      		for(var i = 0; i < colorInput.length; i++){
      			if(colorInput[i].checked){
      				boxColor = colorInput[i].value;
      				}
      		}

    //Check if name entry field was populated
      if(boxName == null || boxName == ""){
      	alert("Please enter a name for your box!");
      	return;
      }

      //Check to see if number of boxes was checked
      if(boxAmount == ""){
      	alert("Please select how many boxes you want to create!");
      	return;
      }

	for(var i = 0; i < boxAmount; i++){
		//Get the div#scene from the DOM
		var divScene = document.getElementById("scene");

		//Set the x and y coordinates for the top and left positions
		var x = Math.floor(Math.random() * (divScene.offsetWidth-101));
		var y = Math.floor(Math.random() * (divScene.offsetHeight-101));

		//Create the new div element
		var boxChild = document.createElement("div");

		//Set the new div element to the class .box
		boxChild.setAttribute("class", "box");
		boxChild.style.backgroundColor = boxColor;
		name = boxChild.innerHTML = boxName;
		boxChild.style.top = y + "px";
		boxChild.style.left = x + "px";

		//Add the new box to the div#scene
		divScene.appendChild(boxChild);

		//Increase boxCounter by 1
		boxCounter += 1;

		//Set a unique id for the new div box to the boxCounter
		boxChild.setAttribute("id", boxCounter);

		//Create a new object with name and color arguments
		var newBox = new Box(boxName, boxColor, boxCounter, x, y); 

		//Add the Object newBox to the array boxList
		boxArray.push(newBox);
		}

		var div = document.querySelectorAll("div#scene div.box");
			for (var i = 0; i < div.length; i++){
				div[i].onclick = display;
				}
	//Clear the form entries
	var theForm = document.forms.data;
	theForm.reset();
	}

function display(e){
	var div = e.target;
	var id = div.getAttribute("id");
	var arrayIndex = parseInt(id - 1);
	var colorName = "";
	if(boxArray[arrayIndex].color == "#ff0033"){
		colorName = "red";
	}
	else if(boxArray[arrayIndex].color == "#ff9900"){
		colorName = "orange";
	}
	else if(boxArray[arrayIndex].color == "#ffff00"){
		colorName = "yellow";
	}
	else if(boxArray[arrayIndex].color == "#00cc00"){
		colorName = "green";
	}
	else if(boxArray[arrayIndex].color == "#3399ff"){
		colorName = "blue";
	}
	else if(boxArray[arrayIndex].color == "#cc0099"){
		colorName = "indigo";
	}
	else if(boxArray[arrayIndex].color == "#990099"){
		colorName = "violet";
	}

	alert("You have selected a box with an id of " + id + ", named " + boxArray[arrayIndex].name + ", whose color is " +  colorName + " at position " + boxArray[arrayIndex].x + " on the x-axis and " + boxArray[arrayIndex].y + " on the y-axes.");

}

