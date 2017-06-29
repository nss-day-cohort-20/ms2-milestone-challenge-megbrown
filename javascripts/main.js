let carContainer = document.getElementById("carContainer");
let inputField = document.getElementById("input");

function makeCar(carInventoryArr) {
	for (counter = 0; counter < 3; counter++) {
		carContainer.innerHTML +=
			`<div class="col-sm-4">
				<div class="col-sm-12 card">
				 	<h2>${carInventoryArr[counter].make}</h2>
				 	<h4>${carInventoryArr[counter].model}</h4>
				 	<h5>${carInventoryArr[counter].year}</h5>
				 	<h3>${carInventoryArr[counter].price}</h3>
					<p>${carInventoryArr[counter].description}</p>
				</div>
			</div>`
	}
	addClass();
}

function addClass() {
	let carEl = document.querySelectorAll(".card");
	for (i=0; i<carEl.length; i++) {
		carEl[i].addEventListener("click", function(event) {
			for (j=0; j<carEl.length; j++) {
				carEl[j].classList.remove("newClass");
			}
			event.currentTarget.classList.add("newClass");
			inputField.focus();
			keyPress();
		})
	}
}

function keyPress() {
	inputField.addEventListener("keyup", function() {
		if (event.key === "Enter") {
			inputField.value = "";
		} else {
			replaceInfo();
		}
	})
}

function replaceInfo() {
	let newClassEl = document.querySelector(".newClass");
	newClassEl.querySelector("p").innerHTML = inputField.value;
}

CarLot.loadInventory(makeCar);
