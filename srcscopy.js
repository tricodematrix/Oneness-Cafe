// ============ Oneness Cafe ============
const WHATSAPP_NUMBER = "919370600985"; // replace with cafe number

const CATEGORIES = [
  "Pizza",
  "Pasta",
  "Burgers",
  "Sandwiches",
  "Snacks",
  "Maggi",
  "Ice Creams",
  "Hot Beverages",
  "Cold Beverages",
  "Mojitos",
  "Frappe",
  "Shakes",
];

const MENU = [

  // ================= PIZZA =================
  {
    id: "barbeque-paneer-pizza",
    category: "Pizza",
    name: "Barbeque Paneer Pizza",
    price: 290,
    img: "barbeque-paneer-pizza.jpg",
    desc: "Smoky sauce with marinated paneer and fresh veggies."
  },
  {
    id: "cheese-chilli-pizza",
    category: "Pizza",
    name: "Cheese Chilli Pizza",
    price: 260,
    img: "cheese-chilli-pizza.jpg",
    desc: "Spicy green chillies and capsicum with loads of cheese."
  },
  {
    id: "chocolate-pizza",
    category: "Pizza",
    name: "Chocolate Pizza",
    price: 220,
    img: "chocolate-pizza.jpg",
    desc: "Unique pizza topped with rich chocolate flavor."
  },
  {
    id: "fries-pizza",
    category: "Pizza",
    name: "Fries Pizza",
    price: 230,
    img: "fries-pizza.jpg",
    desc: "Fusion pizza topped with crispy fries."
  },
  {
    id: "margherita-pizza",
    category: "Pizza",
    name: "Margherita Pizza",
    price: 220,
    img: "margherita-pizza.jpg",
    desc: "Classic cheesy margherita pizza with herbs."
  },
  {
    id: "veg-cheese-corn-pizza",
    category: "Pizza",
    name: "Veg Cheese Corn Pizza",
    price: 230,
    img: "veg-cheese-corn-pizza.jpg",
    desc: "Sweet corn and melted cheese over fresh crust."
  },
  {
    id: "veg-cheese-pizza",
    category: "Pizza",
    name: "Veg Cheese Pizza",
    price: 210,
    img: "veg-cheese-pizza.jpg",
    desc: "Classic veg pizza with golden cheese."
  },
  {
    id: "maggi-pizza",
    category: "Pizza",
    name: "Maggi Pizza",
    price: 230,
    img: "maggi-pizza.jpg",
    desc: "Fusion pizza topped with masala Maggi noodles."
  },
  {
    id: "veg-paneer-cheese-pizza",
    category: "Pizza",
    name: "Veg Paneer Cheese Pizza",
    price: 250,
    img: "veg-paneer-cheese-pizza.jpg",
    desc: "Loaded with paneer cubes and mozzarella cheese."
  },

  // ================= PASTA =================
  {
    id: "classic-italiano-pasta",
    category: "Pasta",
    name: "Classic Italiano Pasta",
    price: 220,
    img: "classic-italiano-pasta.jpg",
    desc: "Creamy white sauce pasta with herbs."
  },
  {
    id: "peri-peri-pasta",
    category: "Pasta",
    name: "Peri Peri Pasta",
    price: 200,
    img: "peri-peri-pasta.jpg",
    desc: "Spicy pasta with peri peri flavors."
  },
  {
    id: "pink-pasta",
    category: "Pasta",
    name: "Pink Pasta",
    price: 230,
    img: "pink-pasta.jpg",
    desc: "Blend of white cream and tomato sauces."
  },
  {
    id: "red-devil-pasta",
    category: "Pasta",
    name: "Red Devil Pasta",
    price: 200,
    img: "red-devil-pasta.jpg",
    desc: "Bold and tangy tomato red sauce pasta."
  },

  // ================= BURGERS =================
  {
    id: "aloo-tikki-burger",
    category: "Burgers",
    name: "Aloo Tikki Burger",
    price: 100,
    img: "aloo-tikki-burger.jpg",
    desc: "Crispy potato patty with fresh veggies."
  },
  {
    id: "aloo-tikki-cheese-burger",
    category: "Burgers",
    name: "Aloo Tikki Cheese Burger",
    price: 130,
    img: "aloo-tikki-cheese-burger.jpg",
    desc: "Classic aloo tikki burger with cheese."
  },
  {
    id: "cheesy-blast-burger",
    category: "Burgers",
    name: "Cheesy Blast Burger",
    price: 170,
    img: "cheesy-blast-burger.jpg",
    desc: "Jumbo burger loaded with extra cheese."
  },
  {
    id: "oneness-special-subs-burger",
    category: "Burgers",
    name: "Oneness Special Subs Burger",
    price: 200,
    img: "oneness-special-subs-burger.jpg",
    desc: "Signature sub-style burger with premium fillings."
  },
  {
    id: "tandoori-paneer-burger",
    category: "Burgers",
    name: "Tandoori Paneer Burger",
    price: 160,
    img: "tandoori-paneer-burger.jpg",
    desc: "Paneer cubes marinated in tandoori masala."
  },

  // ================= SANDWICHES =================
  {
    id: "veg-sandwich",
    category: "Sandwiches",
    name: "Veg Sandwich",
    price: 90,
    img: "veg-sandwich.jpg",
    desc: "Fresh vegetable sandwich."
  },
  {
    id: "veg-grilled-sandwich",
    category: "Sandwiches",
    name: "Veg Grilled Sandwich",
    price: 130,
    img: "veg-grilled-sandwich.jpg",
    desc: "Grilled bread stuffed with vegetables."
  },
  {
    id: "veg-cheese-sandwich",
    category: "Sandwiches",
    name: "Veg Cheese Sandwich",
    price: 130,
    img: "veg-cheese-sandwich.jpg",
    desc: "Vegetable sandwich with cheese."
  },
  {
    id: "veg-cheese-grilled-sandwich",
    category: "Sandwiches",
    name: "Veg Cheese Grilled Sandwich",
    price: 200,
    img: "veg-cheese-grilled-sandwich.jpg",
    desc: "Golden grilled sandwich with cheese."
  },
  {
    id: "nutella-grilled-sandwich",
    category: "Sandwiches",
    name: "Nutella Grilled Sandwich",
    price: 160,
    img: "nutella-grilled-sandwich.jpg",
    desc: "Warm grilled Nutella sandwich."
  },

  // ================= SNACKS =================
  {
    id: "french-fries",
    category: "Snacks",
    name: "French Fries",
    price: 130,
    img: "french-fries.jpg",
    desc: "Golden crispy salted fries."
  },
  {
    id: "cheese-fries",
    category: "Snacks",
    name: "Cheese Fries",
    price: 180,
    img: "cheese-fries.jpg",
    desc: "Fries loaded with melted cheese."
  },
  {
    id: "masala-fries",
    category: "Snacks",
    name: "Masala Fries",
    price: 160,
    img: "masala-fries.jpg",
    desc: "Crispy fries tossed in masala."
  },
  {
    id: "peri-peri-fries",
    category: "Snacks",
    name: "Peri Peri Fries",
    price: 160,
    img: "peri-peri-fries.jpg",
    desc: "Spicy peri peri seasoned fries."
  },

  // ================= MAGGI =================
  {
    id: "plain-maggi",
    category: "Maggi",
    name: "Plain Maggi",
    price: 80,
    img: "plain-maggi.jpg",
    desc: "Classic masala Maggi noodles."
  },
  {
    id: "veg-masala-maggi",
    category: "Maggi",
    name: "Veg Masala Maggi",
    price: 100,
    img: "veg-masala-maggi.jpg",
    desc: "Masala Maggi loaded with vegetables."
  },
  {
    id: "veg-masala-cheese-maggi",
    category: "Maggi",
    name: "Veg Masala Cheese Maggi",
    price: 140,
    img: "veg-masala-cheese-maggi.jpg",
    desc: "Cheesy masala Maggi noodles."
  },

  // ================= ICE CREAMS =================
  {
    id: "vanilla-ice-cream",
    category: "Ice Creams",
    name: "Vanilla Ice Cream",
    price: 100,
    img: "vanilla-ice-cream.jpg",
    desc: "Classic creamy vanilla scoop."
  },
  {
    id: "chocolate-ice-cream",
    category: "Ice Creams",
    name: "Chocolate Ice Cream",
    price: 100,
    img: "chocolate-ice-cream.jpg",
    desc: "Rich dark chocolate ice cream."
  },

  // ================= HOT BEVERAGES =================
  {
    id: "hot-coffee",
    category: "Hot Beverages",
    name: "Hot Coffee",
    price: 40,
    img: "hot-coffee.jpg",
    desc: "Classic frothy hot coffee."
  },
  {
    id: "cappuccino",
    category: "Hot Beverages",
    name: "Cappuccino",
    price: 100,
    img: "cappuccino.jpg",
    desc: "Italian style creamy cappuccino."
  },
  {
    id: "hot-chocolate",
    category: "Hot Beverages",
    name: "Hot Chocolate",
    price: 120,
    img: "hot-chocolate.jpg",
    desc: "Rich melted chocolate drink."
  },

  // ================= COLD BEVERAGES =================
  {
    id: "cold-coffee",
    category: "Cold Beverages",
    name: "Cold Coffee",
    price: 100,
    img: "cold-coffee.jpg",
    desc: "Creamy chilled blended coffee."
  },
  {
    id: "classic-cold-coffee",
    category: "Cold Beverages",
    name: "Classic Cold Coffee",
    price: 130,
    img: "classic-cold-coffee.jpg",
    desc: "Premium thick cold coffee."
  },
  {
    id: "oreo-cold-coffee",
    category: "Cold Beverages",
    name: "Oreo Cold Coffee",
    price: 130,
    img: "oreo-cold-coffee.jpg",
    desc: "Cold coffee blended with Oreo cookies."
  },

  // ================= MOJITOS =================
  {
    id: "lime-mint-mojito",
    category: "Mojitos",
    name: "Lime Mint Mojito",
    price: 100,
    img: "lime-mint-mojito.jpg",
    desc: "Refreshing lime mint mojito."
  },
  {
    id: "green-apple-mojito",
    category: "Mojitos",
    name: "Green Apple Mojito",
    price: 130,
    img: "green-apple-mojito.jpg",
    desc: "Green apple mojito with fresh mint."
  },

  // ================= FRAPPE =================
  {
    id: "oreo-frappe",
    category: "Frappe",
    name: "Oreo Frappe",
    price: 140,
    img: "oreo-frappe.jpg",
    desc: "Blended coffee with Oreo chunks."
  },
  {
    id: "caramel-frappe",
    category: "Frappe",
    name: "Caramel Frappe",
    price: 160,
    img: "caramel-frappe.jpg",
    desc: "Icy caramel coffee frappe."
  },

  // ================= SHAKES =================
  {
    id: "chocolate-shake",
    category: "Shakes",
    name: "Chocolate Shake",
    price: 140,
    img: "chocolate-shake.jpg",
    desc: "Rich and creamy chocolate shake."
  },
  {
    id: "oreo-shake",
    category: "Shakes",
    name: "Oreo Shake",
    price: 160,
    img: "oreo-shake.jpg",
    desc: "Shake loaded with Oreo cookies."
  },
  {
    id: "kitkat-shake",
    category: "Shakes",
    name: "Kitkat Shake",
    price: 160,
    img: "kitkat-shake.jpg",
    desc: "Chocolate shake with KitKat crunch."
  }
];
// ===== MENU ELEMENTS =====
const menuGrid =
  document.getElementById("menuGrid");

const categoryContainer =
  document.getElementById("categoryContainer");

const summaryList =
  document.getElementById("summaryList");

const totalAmount =
  document.getElementById("totalAmount");

// ===== QUANTITIES =====
const quantities = {};

MENU.forEach(item => {
  quantities[item.id] = 0;
});

// ===== UNIQUE CATEGORIES =====
const categories = [
  ...new Set(MENU.map(item => item.category))
];

// ===== CATEGORY BUTTONS =====
categories.forEach((category, index) => {

  const btn =
    document.createElement("button");

  btn.className =
    "category-btn";

  btn.innerText =
    category;

  if(index === 0){
    btn.classList.add("active");
  }

  btn.addEventListener("click", () => {

    document
      .querySelectorAll(".category-btn")
      .forEach(button => {
        button.classList.remove("active");
      });

    btn.classList.add("active");

    renderMenu(category);

  });

  categoryContainer.appendChild(btn);

});

// ===== RENDER MENU =====
function renderMenu(category){

  menuGrid.innerHTML = "";

  const filteredItems = MENU.filter(
    item => item.category === category
  );

  filteredItems.forEach(item => {

    const card =
      document.createElement("div");

    card.className = "menu-card";

    card.innerHTML = `
      <div class="menu-body">

        <div class="menu-title-row">

          <span class="menu-name">
            ${item.name}
          </span>

          <span class="menu-price">
            ₹${item.price}
          </span>

        </div>

        <p class="menu-desc">
          ${item.desc}
        </p>

        <div class="qty-row">

          <button class="qty-btn minus">
            -
          </button>

          <span class="qty">
            ${quantities[item.id]}
          </span>

          <button class="qty-btn plus">
            +
          </button>

        </div>

      </div>
    `;

    menuGrid.appendChild(card);

    const qty =
      card.querySelector(".qty");

    const plusBtn =
      card.querySelector(".plus");

    const minusBtn =
      card.querySelector(".minus");

    // PLUS
    plusBtn.addEventListener("click", () => {

      quantities[item.id]++;

      qty.innerText =
        quantities[item.id];

      updateSummary();

    });

    // MINUS
    minusBtn.addEventListener("click", () => {

      if(quantities[item.id] > 0){

        quantities[item.id]--;

        qty.innerText =
          quantities[item.id];

        updateSummary();

      }

    });

  });

}

// ===== UPDATE SUMMARY =====
function updateSummary(){

  const items = MENU.filter(item =>
    quantities[item.id] > 0
  );

  summaryList.innerHTML = "";

  let total = 0;

  if(items.length === 0){

    summaryList.innerHTML = `
      <li class="empty">
        No items selected yet.
      </li>
    `;

    totalAmount.innerText = "₹0";

    return;

  }

  items.forEach(item => {

    const qty =
      quantities[item.id];

    const subtotal =
      qty * item.price;

    total += subtotal;

    const li =
      document.createElement("li");

    li.innerHTML = `
      <span>
        ${item.name} × ${qty}
      </span>

      <span>
        ₹${subtotal}
      </span>
    `;

    summaryList.appendChild(li);

  });

  totalAmount.innerText =
    `₹${total}`;

}

// ===== DEFAULT CATEGORY =====
renderMenu(categories[0]);

// ===== TOAST =====
const toast =
  document.getElementById("toast");

let toastTimer;

function showToast(message, type = "") {

  toast.textContent = message;

  toast.className = `toast show ${type}`;

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {

    toast.className = `toast ${type}`;

  }, 3000);

}

// ===== PLACE ORDER =====
document
  .getElementById("placeOrderBtn")
  .addEventListener("click", () => {

    const items = MENU.filter(item =>
      quantities[item.id] > 0
    );

    const table =
      document
        .getElementById("custTable")
        .value
        .trim();

    const name =
      document
        .getElementById("custName")
        .value
        .trim();

    const note =
      document
        .getElementById("custNote")
        .value
        .trim();

    if(items.length === 0){

      showToast(
        "Please select at least one item.",
        "error"
      );

      return;

    }

    if(!name){

      showToast(
        "Please enter your name.",
        "error"
      );

      return;

    }

    let total = 0;

    const orderLines = items.map(item => {

      const qty =
        quantities[item.id];

      const subtotal =
        qty * item.price;

      total += subtotal;

      return `
${item.name}
Qty: ${qty}
Amount: ₹${subtotal}
`;

    }).join("\n");

    const message = `
🍽️ Oneness Cafe Order

🪑 Table No: ${table}

👤 Customer: ${name}

📦 Order:
${orderLines}

📝 Suggestion:
${note || "No suggestion"}

💰 Total Bill: ₹${total}
`;

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

});

// ===== NAV TOGGLE =====
const navToggle =
  document.getElementById("navToggle");

const navLinks =
  document.getElementById("navLinks");

navToggle.addEventListener("click", () => {

  navLinks.classList.toggle("open");

});

navLinks.querySelectorAll("a").forEach(a => {

  a.addEventListener("click", () => {

    navLinks.classList.remove("open");

  });

});

// ===== FOOTER YEAR =====
document.getElementById("year").textContent =
  new Date().getFullYear();