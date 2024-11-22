var merchCart = JSON.parse(sessionStorage.getItem("merchandise"))

if (merchCart == null) {
    merchCart = [];
}

console.log(merchCart);


 function addMerchSetter() {
  
    const itemName = document.getElementById("itemName").innerHTML;
    const size = document.getElementById("size").value;
  const merchType = itemName + " - " + size;

  const quantity = parseInt(document.getElementById("quantity").value);

  const price = parseFloat(document.getElementById("itemPrice").innerHTML);

  const itemTotal = quantity * price;
  console.log(price, itemTotal);

  var item = {
    type: merchType,
    quantity: quantity,
    price: price,
    total: itemTotal
    }

merchCart.push(item);
var jsonMerch = JSON.stringify(merchCart);
sessionStorage.setItem("merchandise", jsonMerch);

console.log(jsonMerch);
}

  //