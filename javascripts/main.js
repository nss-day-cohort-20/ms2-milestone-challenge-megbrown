let carContainer = document.getElementById("carContainer");
let inputField = document.getElementById("input");

function carToDom(carInventoryArr) {
	let domString = "";
	for (counter = 0; counter < carInventoryArr.length; counter++) {
		if (counter % 3 === 0) {
			domString += `<div class="row">`;
		}
		domString +=
			`<div class="col-sm-4 card-border">
				<div class="col-sm-12 card">
				 	<h2>${carInventoryArr[counter].make}</h2>
				 	<h4>${carInventoryArr[counter].model}</h4>
				 	<h5>${carInventoryArr[counter].year}</h5>
				 	<h3>${carInventoryArr[counter].price}</h3>
					<p>${carInventoryArr[counter].description}</p>
				</div>
			</div>`;
		if (counter % 3 === 2) {
			domString += `</div>`;
			console.log(counter % 3)
		}
	}
	carContainer.innerHTML = domString;
	addNewClass();
}

function addNewClass() {
	let carEl = document.querySelectorAll(".card");
	for (i=0; i<carEl.length; i++) {
		carEl[i].addEventListener("click", function(event) {
			for (j=0; j<carEl.length; j++) {
				carEl[j].classList.remove("newClass");
			}
			event.currentTarget.classList.add("newClass");
			inputField.focus();
			hearInputField();
		})
	}
}

function hearInputField() {
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

CarLot.loadInventory(carToDom);