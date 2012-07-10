/*
Author: Kevin Ward
Class: VFW1207
Name: Project 3
Date: 07-08-2012
*/

// Say function only if needed.
var say = function(message) { console.log(message); };

// My Functions

window.addEventListener("DOMContentLoaded", function(){
	

	var petGroups = ["--Choose A Pet Type--", "Dogs", "Cats", "Rodents", "Birds", "Farm Animals"],
		genderValue,
		faveValue = "No"
	;

	// My getElementById or gebi function
	function gebi(x){
		var theElement = document.getElementById(x);
		return theElement;
	};
	
	// Create select field element and populate with options.
	var makeCats = function() {
		var formTag = document.getElementsByTagName("form"),
			selectLi = gebi("petsType"),
			makeSelect = document.createElement("petsType");
			makeSelect.setAttribute("id", "petsType");
		for(var i=0, j=petGroups.length; i<j; i++) {
			var makeOption = document.createElement("option");
			var optTxt = petGroups[i];
			makeOption.setAttribute("value", optTxt);
			makeOption.innerHTML = optTxt;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	};
	
	// Find the value of selected radio button.
	function getSelectedRadio() {
		var radio = document.forms[0].gender;
		for (var i=0; i<radio.length; i++) {
			if (radio[i].checked) {
				genderValue = radio[i].value;
			};
		};
	};
	
	// Finds the value of the Checkbox
	function getCheckboxValue(){
		if (gebi("favePet").checked) {
			faveValue = gebi("favePet").value;
		} else {
			faveValue = "No";
		};
	};
	
	// My submit function
	var submit = function() {
		var id				= Math.floor(Math.random()*1000001);
		// Gather round ye olde form field values, and store in ye olde objects.
		// Object props contain array with the form label and input value.
		
		getSelectedRadio();
		getCheckboxValue();
		
		var item			= {};
			item.petType	= ["Pet Type:", gebi("petType").value];
			item.petName	= ["Pet Name:", gebi("petName").value];
			item.gender		= ["Gender:", genderValue];
			item.favepet	= ["Favorite Pet:", faveValue];
			item.yearBought	= ["Year Bought:", gebi("yearBought").value];
			item.koolness	= ["Koolness:", gebi("koolness").value];
			item.comments	= ["Comments:", gebi("comments").value];
		// Save data into Local Storage: Use Stringify to convert the object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Pet is saved to the Pokedex!");
	};
	
	// My getData function
	var getData = function() {
		// This is supposed to write data from Local Storage back to the browser.
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		
		document.body.appendChild(makeDiv);
		
		for (var i=0, len=localStorage.length; i<len; i++) {
			var makeLi = document.createElement("li");
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			
			// Convert strings back to being an object from localStorage value.
			var object = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeLi.appendChild(makeSubList);
			for (var n in object) {
				var makeSubLi = document.createElement("li");
				makeSubList.appendChild(makeSubLi);
				var optSubText = object[n][0]+" "+object[n][1];
				makeSubLi.innerHTML = optSubText;
			};
		};
	};
	
	// My Clear Data Function
	var clearDataStorage = function() {
		clear; localStorage.clear();
		return false;
	};
	
	// My Show Array Function
	var showArray = function() {
		// Supposed to show something here.
		return true;
	};
	
	
	makeCats();
	
	var saveData = gebi("submit");
	saveData.addEventListener("click", submitData);
	var showData = gebi("getData");
	showData.addEventListener("click", getData);
	var clearData = gebi("clearData");	
	clearData.addEventListener("click", clearDataStorage);
	
	
});

