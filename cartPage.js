let cart = [];

  function addToCart() {
    const ticketType = document.getElementById("ticket-type").value;
    const quantity = parseInt(document.getElementById("quantity").value);

    if (isNaN(quantity) || quantity <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    let price;
    if (ticketType === "V.I.P") {
      price = 40;
    } else if (ticketType === "Economy") {
      price = 25;
    }

    const itemTotal = quantity * price;

    const item = {
      type: ticketType,
      quantity: quantity,
      price: price,
      total: itemTotal,
    };

    cart.push(item);
    updateCartSummary();
  }

  function resetCart() {
    cart = [];
    document.getElementById("ticket-type").value = "V.I.P";
    document.getElementById("quantity").value = "1";
    updateCartSummary();
    sessionStorage.clear();

  }

  function updateCartSummary() {
    const cartTableBody = document.querySelector("#cart-items tbody");
    cartTableBody.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
      const row = cartTableBody.insertRow();
      const cellType = row.insertCell(0);
      const cellQuantity = row.insertCell(1);
      const cellPrice = row.insertCell(2);
      const cellTotal = row.insertCell(3);

      cellType.textContent = item.type;
      cellQuantity.textContent = item.quantity;
      cellPrice.textContent = `$${item.price.toFixed(2)}`;
      cellTotal.textContent = `$${item.total.toFixed(2)}`;

      total += item.total;
    });

    document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
  }

//--------- Additional JS for merch !! ------------- //

  function merchGetter() {
    const merchandise = JSON.parse(sessionStorage.getItem("merchandise"));
    console.log(merchandise);

    var item = {}

  for (i=0; i<merchandise.length; i++) {
    item = merchandise[i]
    console.log(item);
    cart.push(item)
  };
  
    updateCartSummary();
  }

  function popUp() {
    if (window.confirm("Are you sure you want to proceed with checkout?")) {
      window.open("thankForPurchase.html");
    }
  }
 
