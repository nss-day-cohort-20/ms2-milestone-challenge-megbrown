let carContainer = document.getElementById("carContainer");

function makeCar(carInventoryArr) {
	carInventoryArr.forEach( function(currentCar) {
		let carEl = document.createElement("div");
		carEl.setAttribute("class", "col-sm-4");
		carEl.innerHTML =
			`<div class="col-sm-12 card">
			 	<h2>${currentCar.make}</h2>
			 	<h4>${currentCar.model}</h4>
			 	<p>${currentCar.year}</p>
			 	<h3>${currentCar.price}</h3>
				<p>${currentCar.description}</p>
			</div>`
		carContainer.appendChild(carEl);
	})
}

CarLot.loadInventory(makeCar);
