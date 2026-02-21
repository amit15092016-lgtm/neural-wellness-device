const items = [
  { name: "Linen Summer Shirt", size: "M", price: 22 },
  { name: "Classic Black Jeans", size: "32", price: 35 },
  { name: "Beige Trench Coat", size: "L", price: 60 },
  { name: "Retro Sneakers", size: "9", price: 40 }
];

const itemsRoot = document.querySelector("#items");
items.forEach((item) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <h4>${item.name}</h4>
    <p>Size: ${item.size}</p>
    <p><strong>$${item.price}</strong></p>
    <button class="btn btn-secondary">Buy now</button>
  `;
  itemsRoot.appendChild(card);
});

const form = document.querySelector("#sell-form");
const preview = document.querySelector("#listing-preview");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const itemName = document.querySelector("#itemName").value;
  const category = document.querySelector("#category").value;
  const price = document.querySelector("#price").value;
  const condition = document.querySelector("#condition").value;

  preview.innerHTML = `
    <h4>Listing Preview</h4>
    <p><strong>${itemName}</strong></p>
    <p>Category: ${category}</p>
    <p>Condition: ${condition}</p>
    <p>Price: $${price}</p>
    <p style="color:#059669;font-weight:700;">Ready to publish ✅</p>
  `;

  form.reset();
});
