


const cards = document.querySelectorAll(".card");

let count = 1;

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    
    
    card.addEventListener("click", function () {
        const title = card.querySelector("h2").innerText;
        const price = card.querySelector("p").innerText;
        console.log(title, price)
        
        const ProductContainer = document.getElementById("Product-container");
        const div = document.createElement("div");
        div.classList.add("flex", "justify-between");
        const h1 = document.createElement("h1");
        h1.innerText =count+". "+ title;   
        div.appendChild(h1);   
        
        const p = document.createElement("p");
        p.innerText = price;
        div.appendChild(p)
        
        ProductContainer.appendChild(div);

        count++;
    })

    
}