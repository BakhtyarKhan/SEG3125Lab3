function openInfo(evt, navName) {

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(navName).style.display = "block";
	evt.currentTarget.className += " active";

}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var bcc = document.getElementsByClassName("panel");

function toggleItem() {
	for (i = 0; i < acc.length; i++) {
		if(acc[i].className === "accordion active") {
			acc[i].className = "accordion";
			bcc[i].style.display = "none";
		}
	}
}

function prefFunction() {
	var vegetarian = document.getElementById("Vegetarian").checked;
	var organic = document.getElementById("Organic").checked;
	var glutenFree = document.getElementById("GlutenFree").checked;

	if(vegetarian == true && organic == true && glutenFree == true) {
		populateListProductChoices("Vegetarian & GlutenFree & Organic", 'displayFruitVegetables', 'displayGrain', 'displayMeat', 'displaySnackDrink')
	}
	else if (vegetarian == true && organic == true) {
		populateListProductChoices("Organic & Vegetarian", 'displayFruitVegetables', 'displayGrain', 'displayMeat', 'displaySnackDrink')
	}
	else if (vegetarian == true && glutenFree ==true) {
		populateListProductChoices("Vegetarian & GlutenFree", 'displayFruitVegetables', 'displayGrain', 'displayMeat', 'displaySnackDrink')
	}
	else if (organic == true && glutenFree == true) {
		populateListProductChoices("Organic & GlutenFree", 'displayFruitVegetables', 'displayGrain', 'displayMeat', 'displaySnackDrink')
	}
	else if (vegetarian == true) {
		populateListProductChoices("Vegetarian", 'displayFruitVegetables', 'displayGrain', 'displayMeat', 'displaySnackDrink')
	}
	else if (organic == true) {
		populateListProductChoices("Organic", 'displayFruitVegetables', 'displayGrain', 'displayMeat', 'displaySnackDrink')
	}
	else if (glutenFree == true) {
		populateListProductChoices("GlutenFree", 'displayFruitVegetables', 'displayGrain', 'displayMeat', 'displaySnackDrink')
	}
	else {
		populateListProductChoices("None", 'displayFruitVegetables', 'displayGrain', 'displayMeat', 'displaySnackDrink')
	}
}

prefFunction()

function populateListProductChoices(slct1, slct2, slct3, slct4, slct5) {
    var s1 = slct1;
    var s2 = document.getElementById(slct2);
	var s3 = document.getElementById(slct3);
	var s4 = document.getElementById(slct4);
	var s5 = document.getElementById(slct5);
    s2.innerHTML = "";
	s3.innerHTML = "";
	s4.innerHTML = "";
	s5.innerHTML = "";

    var optionArray = restrictListProducts(products, s1);

	optionArray.sort(function(a,b) {return a.price - b.price});

	for (i = 0; i < optionArray.length; i++) {

		var productName = optionArray[i];
		var image = productName.img;
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName.name;

		var picture = document.createElement("IMG");
		picture.setAttribute("src", image);
		picture.setAttribute("width", "350");
 		picture.setAttribute("height", "250");

		var label = document.createElement('label')
		label.htmlFor = productName.name;
		label.appendChild(document.createTextNode(productName.name + " $" + productName.price));

		if(productName.foodGroup[0] == 1) {
			s2.appendChild(checkbox);
			s2.appendChild(picture);
			s2.appendChild(document.createElement("br"));
			s2.appendChild(checkbox);
			s2.appendChild(label);
			s2.appendChild(document.createElement("br"));
		}
		else if(productName.foodGroup[1] == 1) {
			s3.appendChild(checkbox);
			s3.appendChild(picture);
			s3.appendChild(document.createElement("br"));
			s3.appendChild(checkbox);
			s3.appendChild(label);
			s3.appendChild(document.createElement("br"));
		}
		else if(productName.foodGroup[2] == 1) {
			s4.appendChild(checkbox);
			s4.appendChild(picture);
			s4.appendChild(document.createElement("br"));
			s4.appendChild(checkbox);
			s4.appendChild(label);
			s4.appendChild(document.createElement("br"));
		}
		else {
			s5.appendChild(checkbox);
			s5.appendChild(picture);
			s5.appendChild(document.createElement("br"));
			s5.appendChild(checkbox);
			s5.appendChild(label);
			s5.appendChild(document.createElement("br"));
		}
	}
}

function selectedItems(){

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
	
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts).toFixed(2)));

}
