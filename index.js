


const cards = document.querySelectorAll(".card");

let count = 1;
let totalPrice = 0;

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    
    
    card.addEventListener("click", function () {
      const title = card.querySelector("h2").innerText;
      const price = parseInt(card.querySelector("p").innerText.split(" ")[0]);

      const ProductContainer = document.getElementById("Product-container");
      const div = document.createElement("div");
      div.classList.add("flex", "justify-between");

      // Get product name

      const h1 = document.createElement("h1");
      h1.innerText = count + ". " + title;
      div.appendChild(h1);

      // Get product price

      const p = document.createElement("p");
      p.innerText = price;
      div.appendChild(p);

      ProductContainer.appendChild(div);

      count++;

      // Set total price

      totalPrice += price;
      const total = document.getElementById("Total");
        total.innerText = totalPrice;
        

        const grand = document.getElementById("Grand");
        grand.innerText = totalPrice;
    })

    
}



const button = document.getElementById("apply-btn");

button.addEventListener("click", function () {

    const input = document.getElementById("input-field").value;
    const inputValue = input.split(" ").join("").toUpperCase();

    if (totalPrice > 200) {
        if (inputValue == "SELL200") {
            const discount = document.getElementById("Discount");
            const discountPrice = totalPrice * 0.2;
            discount.innerText = discountPrice.toFixed(2);

            // set grand total
            const grandTotal = document.getElementById("Grand");
            grandTotal.innerText = totalPrice - discountPrice.toFixed(2);
            

            document.getElementById("input-field").value="";
    
        } else {
            alert("Invalid coupon!!")
            document.getElementById("input-field").value = "";
        }
    } else {
        alert("Please, Shoping at least up to 200 tk !!")
        document.getElementById("input-field").value = "";
    }
    
    
})