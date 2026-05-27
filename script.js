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
  "Tea and Coffee",
  "Cold Beverages",
  "Moctails",
  "Frappe",
  "Shakes",
];

const MENU = [

  {
    id: "special-tea",
    category: "Tea and Coffee",
    name: "Special Tea",
    price: 30,
    img: "special-tea.jpg",
    desc: "Classic refreshing tea."
  },
  {
    id: "black-tea",
    category: "Tea and Coffee",
    name: "Black Tea",
    price: 30,
    img: "black-tea.jpg",
    desc: "Strong black tea."
  },
  {
    id: "green-tea",
    category: "Tea and Coffee",
    name: "Green Tea",
    price: 30,
    img: "green-tea.jpg",
    desc: "Healthy green tea."
  },
  {
    id: "lemon-tea",
    category: "Tea and Coffee",
    name: "Lemon Tea",
    price: 30,
    img: "lemon-tea.jpg",
    desc: "Refreshing lemon infused tea."
  },
  {
    id: "hot-coffee",
    category: "Tea and Coffee",
    name: "Hot Coffee",
    price: 40,
    img: "hot-coffee.jpg",
    desc: "Freshly brewed coffee."
  },
  {
    id: "black-coffee",
    category: "Tea and Coffee",
    name: "Black Coffee",
    price: 30,
    img: "black-coffee.jpg",
    desc: "Strong black coffee."
  },
  {
    id: "mocha-crush-coffee",
    category: "Tea and Coffee",
    name: "Mocha Crush Coffee",
    price: 80,
    img: "mocha-crush-coffee.jpg",
    desc: "Chocolate flavored mocha coffee."
  },
  {
    id: "hot-caramel-coffee",
    category: "Tea and Coffee",
    name: "Hot Caramel Coffee",
    price: 100,
    img: "hot-caramel-coffee.jpg",
    desc: "Rich caramel coffee."
  },
  {
    id: "hot-irish-coffee",
    category: "Tea and Coffee",
    name: "Hot Irish Coffee",
    price: 100,
    img: "hot-irish-coffee.jpg",
    desc: "Smooth Irish style coffee."
  },
  {
    id: "hot-chocolate",
    category: "Tea and Coffee",
    name: "Hot Chocolate",
    price: 90,
    img: "hot-chocolate.jpg",
    desc: "Creamy hot chocolate."
  },
  {
    id: "hot-hazelnut",
    category: "Tea and Coffee",
    name: "Hot Hazelnut",
    price: 100,
    img: "hot-hazelnut.jpg",
    desc: "Hazelnut flavored hot beverage."
  },
  {
    id: "cappuccino",
    category: "Tea and Coffee",
    name: "Cappuccino",
    price: 80,
    img: "cappuccino.jpg",
    desc: "Classic creamy cappuccino."
  },

 // ================= COLD BEVERAGES =================
{
  id: "cold-coffee",
  category: "Cold Beverages",
  name: "Cold Coffee",
  price: 80,
  img: "cold-coffee.jpg",
  desc: "Classic chilled creamy coffee."
},
{
  id: "chocolate-coffee",
  category: "Cold Beverages",
  name: "Chocolate Coffee",
  price: 100,
  img: "chocolate-coffee.jpg",
  desc: "Cold coffee blended with chocolate."
},
{
  id: "classic-cold-coffee",
  category: "Cold Beverages",
  name: "Classic Cold Coffee",
  price: 100,
  img: "classic-cold-coffee.jpg",
  desc: "Rich and smooth cold coffee."
},
{
  id: "oreo-frappe",
  category: "Frappe",
  name: "Oreo Frappe",
  price: 110,
  img: "oreo-frappe.jpg",
  desc: "Creamy Oreo blended frappe."
},
{
  id: "brownie-frappe",
  category: "Frappe",
  name: "Brownie Frappe",
  price: 120,
  img: "brownie-frappe.jpg",
  desc: "Chocolate brownie flavored frappe."
},
{
  id: "hazelnut-frappe",
  category: "Frappe",
  name: "Hazelnut Frappe",
  price: 110,
  img: "hazelnut-frappe.jpg",
  desc: "Hazelnut flavored chilled frappe."
},
{
  id: "irish-frappe",
  category: "Frappe",
  name: "Irish Frappe",
  price: 110,
  img: "irish-frappe.jpg",
  desc: "Smooth Irish style creamy frappe."
},
{
  id: "caramel-frappe",
  category: "Frappe",
  name: "Caramel Frappe",
  price: 120,
  img: "caramel-frappe.jpg",
  desc: "Sweet caramel flavored frappe."
},
{
  id: "ice-cream-coffee",
  category: "Cold Beverages",
  name: "Ice-Cream Coffee",
  price: 100,
  img: "ice-cream-coffee.jpg",
  desc: "Cold coffee served with ice cream."
},
{
  id: "ice-cream-with-chocolate",
  category: "Cold Beverages",
  name: "Ice-Cream With Chocolate",
  price: 120,
  img: "ice-cream-with-chocolate.jpg",
  desc: "Chocolate topped ice cream coffee."
},
{
  id: "thick-cold-coffee",
  category: "Cold Beverages",
  name: "Thick Cold Coffee",
  price: 70,
  img: "thick-cold-coffee.jpg",
  desc: "Extra thick and creamy cold coffee."
},
{
  id: "oreo-cold-coffee",
  category: "Cold Beverages",
  name: "Oreo Cold Coffee",
  price: 100,
  img: "oreo-cold-coffee.jpg",
  desc: "Cold coffee blended with Oreo cookies."
},
// ================= SHAKES =================
{
  id: "strawberry-shake",
  category: "Shakes",
  name: "Strawberry Shake",
  price: 100,
  img: "strawberry-shake.jpg",
  desc: "Fresh strawberry flavored milkshake."
},
{
  id: "mango-shake",
  category: "Shakes",
  name: "Mango Shake",
  price: 100,
  img: "mango-shake.jpg",
  desc: "Refreshing mango milkshake."
},
{
  id: "vanilla-milk-shake",
  category: "Shakes",
  name: "Vanilla Milk Shake",
  price: 100,
  img: "vanilla-milk-shake.jpg",
  desc: "Classic vanilla creamy shake."
},
{
  id: "oreo-shake",
  category: "Shakes",
  name: "Oreo Shake",
  price: 120,
  img: "oreo-shake.jpg",
  desc: "Crunchy Oreo blended shake."
},
{
  id: "kitkat-shake",
  category: "Shakes",
  name: "KitKat Shake",
  price: 120,
  img: "kitkat-shake.jpg",
  desc: "Chocolate KitKat flavored shake."
},
{
  id: "brownie-shake",
  category: "Shakes",
  name: "Brownie Shake",
  price: 120,
  img: "brownie-shake.jpg",
  desc: "Rich brownie chocolate shake."
},
{
  id: "chocolate-shake",
  category: "Shakes",
  name: "Chocolate Shake",
  price: 110,
  img: "chocolate-shake.jpg",
  desc: "Creamy chocolate milkshake."
},
{
  id: "nutella-shake",
  category: "Shakes",
  name: "Nutella Shake",
  price: 110,
  img: "nutella-shake.jpg",
  desc: "Nutella infused creamy shake."
},

// ================= ICE CREAMS =================
{
  id: "vanilla-ice-cream",
  category: "Ice Creams",
  name: "Vanilla Ice Cream",
  price: 80,
  img: "vanilla-ice-cream.jpg",
  desc: "Classic vanilla ice cream."
},
{
  id: "mango-ice-cream",
  category: "Ice Creams",
  name: "Mango Ice Cream",
  price: 80,
  img: "mango-ice-cream.jpg",
  desc: "Fresh mango flavored ice cream."
},
{
  id: "strawberry-ice-cream",
  category: "Ice Creams",
  name: "Strawberry Ice Cream",
  price: 80,
  img: "strawberry-ice-cream.jpg",
  desc: "Sweet strawberry ice cream."
},
{
  id: "chocolate-ice-cream",
  category: "Ice Creams",
  name: "Chocolate Ice Cream",
  price: 80,
  img: "chocolate-ice-cream.jpg",
  desc: "Rich chocolate ice cream."
},

// ================= Moctails =================
{
  id: "blue-heaven-shot",
  category: "Moctails",
  name: "Blue Heaven Shot",
  price: 80,
  img: "blue-heaven-shot.jpg",
  desc: "Refreshing blue mocktail shot."
},
{
  id: "strawberry-mojito",
  category: "Moctails",
  name: "Strawberry Mojito",
  price: 80,
  img: "strawberry-mojito.jpg",
  desc: "Fresh strawberry flavored mojito."
},
{
  id: "lime-mint-mojito",
  category: "Moctails",
  name: "Lime Mint Mojito",
  price: 80,
  img: "lime-mint-mojito.jpg",
  desc: "Classic lime mint cooler."
},
{
  id: "green-apple-mojito",
  category: "Moctails",
  name: "Green Apple Mojito",
  price: 100,
  img: "green-apple-mojito.jpg",
  desc: "Green apple flavored mojito."
},
{
  id: "sweet-lime-soda",
  category: "Moctails",
  name: "Sweet Lime Soda",
  price: 50,
  img: "sweet-lime-soda.jpg",
  desc: "Sweet and refreshing lime soda."
},
{
  id: "salted-lime-soda",
  category: "Moctails",
  name: "Salted Lime Soda",
  price: 50,
  img: "salted-lime-soda.jpg",
  desc: "Tangy salted lime cooler."
},

// ================= FLOATS =================
{
  id: "coke-orange-float",
  category: "Floats",
  name: "Coke / Orange Float",
  price: 80,
  img: "coke-orange-float.jpg",
  desc: "Soft drink float with ice cream."
},
{
  id: "blue-delight",
  category: "Floats",
  name: "Blue Delight",
  price: 80,
  img: "blue-delight.jpg",
  desc: "Cool blue refreshing float."
},
{
  id: "strawberry-delight",
  category: "Floats",
  name: "Strawberry Delight",
  price: 100,
  img: "strawberry-delight.jpg",
  desc: "Sweet strawberry flavored float."
},


// ================= BURGERS =================
{
  id: "oneness-special-subs-burger",
  category: "Burgers",
  name: "Oneness Special Subs Burger",
  price: 150,
  img: "oneness-special-subs-burger.jpg",
  desc: "Loaded signature special subs burger."
},
{
  id: "aloo-tikki-burger",
  category: "Burgers",
  name: "Aloo Tikki Burger",
  price: 80,
  img: "aloo-tikki-burger.jpg",
  desc: "Classic crispy aloo tikki burger."
},
{
  id: "aloo-tikki-cheese-burger",
  category: "Burgers",
  name: "Aloo Tikki Cheese Burger",
  price: 100,
  img: "aloo-tikki-cheese-burger.jpg",
  desc: "Cheesy aloo tikki burger."
},
{
  id: "veggie-burger",
  category: "Burgers",
  name: "Veggie Burger",
  price: 90,
  img: "veggie-burger.jpg",
  desc: "Fresh veggie loaded burger."
},
{
  id: "veggie-cheese-burger",
  category: "Burgers",
  name: "Veggie Cheese Burger",
  price: 110,
  img: "veggie-cheese-burger.jpg",
  desc: "Veggie burger with melted cheese."
},
{
  id: "cheesy-blast-burger-jumbo",
  category: "Burgers",
  name: "Cheesy Blast Burger Jumbo",
  price: 130,
  img: "cheesy-blast-burger-jumbo.jpg",
  desc: "Extra cheesy jumbo burger."
},
{
  id: "tandoori-paneer-burger",
  category: "Burgers",
  name: "Tandoori Paneer Burger",
  price: 120,
  img: "tandoori-paneer-burger.jpg",
  desc: "Paneer burger with tandoori flavors."
},

// ================= PIZZA =================
{
  id: "veg-cheese-pizza",
  category: "Pizza",
  name: "Veg Cheese Pizza",
  price: 160,
  img: "veg-cheese-pizza.jpg",
  desc: "Classic cheesy veg pizza."
},
{
  id: "veg-cheese-corn-pizza",
  category: "Pizza",
  name: "Veg Cheese Corn Pizza",
  price: 180,
  img: "veg-cheese-corn-pizza.jpg",
  desc: "Corn loaded cheesy pizza."
},
{
  id: "margita-chocolate-pizza",
  category: "Pizza",
  name: "Margita / Chocolate Pizza",
  price: 170,
  img: "margita-chocolate-pizza.jpg",
  desc: "Fusion style margherita chocolate pizza."
},
{
  id: "veg-paneer-cheese-pizza",
  category: "Pizza",
  name: "Veg Paneer Cheese Pizza",
  price: 190,
  img: "veg-paneer-cheese-pizza.jpg",
  desc: "Paneer topped cheesy pizza."
},
{
  id: "cheese-chilli-pizza",
  category: "Pizza",
  name: "Cheese Chilli Pizza",
  price: 200,
  img: "cheese-chilli-pizza.jpg",
  desc: "Spicy cheese chilli pizza."
},
{
  id: "maggie-fries-pizza",
  category: "Pizza",
  name: "Maggie / Fries Pizza",
  price: 180,
  img: "maggie-fries-pizza.jpg",
  desc: "Fusion pizza with maggie and fries."
},
{
  id: "bbq-paneer-pizza",
  category: "Pizza",
  name: "BBQ Paneer Pizza",
  price: 220,
  img: "bbq-paneer-pizza.jpg",
  desc: "BBQ paneer loaded pizza."
},

// ================= SNACKS =================
{
  id: "veg-grill",
  category: "Snacks",
  name: "Veg Grill",
  price: 100,
  img: "veg-grill.jpg",
  desc: "Classic grilled veg sandwich."
},
{
  id: "veg-cheese-grill",
  category: "Snacks",
  name: "Veg Cheese Grill",
  price: 150,
  img: "veg-cheese-grill.jpg",
  desc: "Grilled sandwich with cheese."
},
{
  id: "cheese-corn-capsicum",
  category: "Snacks",
  name: "Cheese Corn Capsicum",
  price: 170,
  img: "cheese-corn-capsicum.jpg",
  desc: "Cheesy corn capsicum delight."
},
{
  id: "paneer-cheese-grill",
  category: "Snacks",
  name: "Paneer Cheese Grill",
  price: 180,
  img: "paneer-cheese-grill.jpg",
  desc: "Paneer stuffed cheese grill."
},
{
  id: "chocolate-grill",
  category: "Snacks",
  name: "Chocolate Grill",
  price: 100,
  img: "chocolate-grill.jpg",
  desc: "Sweet chocolate grilled sandwich."
},
{
  id: "nutella-grill",
  category: "Snacks",
  name: "Nutella Grill",
  price: 120,
  img: "nutella-grill.jpg",
  desc: "Nutella filled grilled sandwich."
},
{
  id: "veg-sandwich",
  category: "Snacks",
  name: "Veg Sandwich",
  price: 70,
  img: "veg-sandwich.jpg",
  desc: "Fresh vegetable sandwich."
},
{
  id: "veg-cheese-sandwich",
  category: "Snacks",
  name: "Veg Cheese Sandwich",
  price: 100,
  img: "veg-cheese-sandwich.jpg",
  desc: "Cheesy vegetable sandwich."
},
{
  id: "bombay-masala-snacks",
  category: "Snacks",
  name: "Bombay Masala Snacks",
  price: 100,
  img: "bombay-masala-snacks.jpg",
  desc: "Mumbai style masala snack."
},
{
  id: "bombay-masala-cheese",
  category: "Snacks",
  name: "Bombay Masala Cheese",
  price: 120,
  img: "bombay-masala-cheese.jpg",
  desc: "Bombay masala with cheese."
},
{
  id: "cheese-garlic-bread",
  category: "Snacks",
  name: "Cheese Garlic Bread",
  price: 100,
  img: "cheese-garlic-bread.jpg",
  desc: "Toasted garlic bread with cheese."
},
{
  id: "peri-peri-paneer-toasty",
  category: "Snacks",
  name: "Peri Peri Paneer Toasty",
  price: 100,
  img: "peri-peri-paneer-toasty.jpg",
  desc: "Spicy peri peri paneer toast."
},
{
  id: "pizza-toasty",
  category: "Snacks",
  name: "Pizza Toasty",
  price: 80,
  img: "pizza-toasty.jpg",
  desc: "Pizza flavored crispy toast."
},

// ================= MAGGI =================
{
  id: "plain-maggie",
  category: "Maggi",
  name: "Plain Maggie",
  price: 60,
  img: "plain-maggie.jpg",
  desc: "Classic masala maggie noodles."
},
{
  id: "veg-masala-maggie",
  category: "Maggi",
  name: "Veg Masala Maggie",
  price: 80,
  img: "veg-masala-maggie.jpg",
  desc: "Veg loaded masala maggie."
},
{
  id: "veg-double-masala-maggie",
  category: "Maggi",
  name: "Veg Double Masala Maggie",
  price: 100,
  img: "veg-double-masala-maggie.jpg",
  desc: "Extra spicy double masala maggie."
},
{
  id: "veg-masala-cheese-maggie",
  category: "Maggi",
  name: "Veg Masala Cheese Maggie",
  price: 110,
  img: "veg-masala-cheese-maggie.jpg",
  desc: "Cheesy veg masala maggie."
},
{
  id: "veg-peri-peri-maggie",
  category: "Maggi",
  name: "Veg Peri Peri Maggie",
  price: 100,
  img: "veg-peri-peri-maggie.jpg",
  desc: "Spicy peri peri flavored maggie."
},
{
  id: "veg-tandoori-maggie",
  category: "Maggi",
  name: "Veg Tandoori Maggie",
  price: 120,
  img: "veg-tandoori-maggie.jpg",
  desc: "Tandoori style veg maggie."
},

// ================= FRIES =================
{
  id: "french-fries",
  category: "Fries",
  name: "French Fries",
  price: 100,
  img: "french-fries.jpg",
  desc: "Crispy golden french fries."
},
{
  id: "masala-fries",
  category: "Fries",
  name: "Masala Fries",
  price: 120,
  img: "masala-fries.jpg",
  desc: "Spicy masala coated fries."
},
{
  id: "cheese-fries",
  category: "Fries",
  name: "Cheese Fries",
  price: 140,
  img: "cheese-fries.jpg",
  desc: "Loaded cheesy french fries."
},
{
  id: "peri-peri-fries",
  category: "Fries",
  name: "Peri Peri Fries",
  price: 120,
  img: "peri-peri-fries.jpg",
  desc: "Peri peri seasoned fries."
},
{
  id: "peri-peri-cheese-blast-fries",
  category: "Fries",
  name: "Peri Peri Cheese Blast Fries",
  price: 170,
  img: "peri-peri-cheese-blast-fries.jpg",
  desc: "Cheesy peri peri loaded fries."
},

// ================= PASTA =================
{
  id: "classic-italiano-pasta",
  category: "Pasta",
  name: "Classic Italiano Pasta",
  price: 170,
  img: "classic-italiano-pasta.jpg",
  desc: "Creamy white sauce pasta."
},
{
  id: "red-devil-pasta",
  category: "Pasta",
  name: "Red Devil Pasta",
  price: 150,
  img: "red-devil-pasta.jpg",
  desc: "Spicy red sauce pasta."
},
{
  id: "pink-pasta",
  category: "Pasta",
  name: "Pink Pasta",
  price: 180,
  img: "pink-pasta.jpg",
  desc: "Mix sauce creamy pasta."
},
{
  id: "peri-peri-pasta",
  category: "Pasta",
  name: "Peri Peri Pasta",
  price: 150,
  img: "peri-peri-pasta.jpg",
  desc: "Spicy peri peri flavored pasta."
},


];
const quantities = Object.fromEntries(MENU.map(i => [i.id, 0]));
const categories = [
  ...new Set(MENU.map(item => item.category))
];
// ----- Table param -----
function getTableNumber(){
  const params = new URLSearchParams(window.location.search);
  
}

// ----- Render menu -----
const menuGrid = document.getElementById("menuGrid");
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

function selectedItems(){

  return MENU
    .filter(item =>
      quantities[item.id] > 0
    )
    .map(item => ({

      ...item,

      qty: quantities[item.id],

      subtotal:
        quantities[item.id] * item.price

    }));

}

// ----- Place order -----
document.getElementById("placeOrderBtn").addEventListener("click", () => {
  const items = MENU
  .filter(item =>
    quantities[item.id] > 0
  )
  .map(item => ({

    ...item,

    qty: quantities[item.id],

    subtotal:
      quantities[item.id] * item.price

  }));
  const table = document .getElementById("custTable").value.trim();
  const name  = document.getElementById("custName").value.trim();
  const mobile= document.getElementById("custMobile").value.trim();
  const note  = document.getElementById("custNote").value.trim();

  if (items.length === 0) return showToast("Please select at least one item.", "error");
  if (!name)              return showToast("Please enter your name.", "error");
  if(!mobile || mobile.length !== 10) return showToast("Please enter a valid 10-digit mobile number.", "error");
  if (!table) return showToast("Please enter your table number.", "error");

  const total = items.reduce((s,i) => s + i.subtotal, 0);
  const orderLines = items.map(i => `${i.name} x ${i.qty} = ₹${i.subtotal}`).join("\n");

const message = `
     ╔══════════════════════╗
      ☕ ONENESS CAFE
     ╚══════════════════════╝

🪑 Table No : ${table}

👤 Customer Name : ${name}

📱 Mobile : ${mobile}

━━━━━━━━━━━━━━━━━━
🍽️ ORDER DETAILS
━━━━━━━━━━━━━━━━━━

${items.map(item => {

  return `• ${item.name}
  Qty   : ${item.qty}
  Price : ₹${item.subtotal}`;

}).join("\n\n")}

━━━━━━━━━━━━━━━━━━

📝 Suggestion:
${note || "No Suggestion"}

━━━━━━━━━━━━━━━━━━

💰 TOTAL BILL : ₹${total}

`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  showToast("Opening WhatsApp…");
  window.open(url, "_blank");
});

// ----- Nav toggle -----
const navToggle = document.getElementById("navToggle");
const navLinks  = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// ----- Reveal on scroll -----
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// ----- Year -----
document.getElementById("year").textContent = new Date().getFullYear();
