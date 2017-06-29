var CarLot = ( function(globalScopeCarLot){

  let carInventoryArr = [];

  return {
  loadInventory: function(callback) {
    var loader = new XMLHttpRequest();
    loader.addEventListener("load", function() {
      carInventoryArr = JSON.parse(this.responseText).cars;
      callback(carInventoryArr);
    });
    loader.open("GET", "../inventory.json");
    loader.send();
  }
}

}());