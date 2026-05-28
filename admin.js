import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";






const firebaseConfig = {
    apiKey: "AIzaSyBnVEXOzyW4OZif2IHOSwaoZy-CL9HN3Jw",
    authDomain: "oneness-cafe.firebaseapp.com",
    projectId: "oneness-cafe",
    storageBucket: "oneness-cafe.firebasestorage.app",
    messagingSenderId: "983934697294",
    appId: "1:983934697294:web:953cf45b43e4f74853281f",
    measurementId: "G-B1BNV4NC8P"
  };

// ===== INIT =====
const app =
  initializeApp(firebaseConfig);

const db =
  getFirestore(app);

// ===== PASSWORD =====
const ADMIN_PASSWORD = "1234";

const pass =
  prompt("Enter Admin Password");

if(pass !== ADMIN_PASSWORD){

  alert("Wrong Password");

  window.location.href =
    "index.html";

}

// ===== ELEMENTS =====
const offerTitle =
  document.getElementById(
    "offerTitle"
  );

const offerMessage =
  document.getElementById(
    "offerMessage"
  );

const offerToggle =
  document.getElementById(
    "offerToggle"
  );

const wifiPassword =
  document.getElementById(
    "wifiPassword"
  );

const cafeTiming =
  document.getElementById(
    "cafeTimingInput"
  );

// ===== LOAD =====
async function loadData(){

  const docRef =
    doc(db, "settings", "cafe");

  const docSnap =
    await getDoc(docRef);

  if(docSnap.exists()){

    const data =
      docSnap.data();

    offerTitle.value =
      data.offerTitle || "";

    offerMessage.value =
      data.offerMessage || "";

    offerToggle.checked =
      data.offerEnabled || false;

    wifiPassword.value =
      data.wifiPassword || "";

    cafeTiming.value =
      data.cafeTiming || "";

  }

}

loadData();

// ===== SAVE =====
document
  .getElementById("saveBtn")
  .addEventListener("click",
async () => {

  await setDoc(
    doc(db, "settings", "cafe"),
    {

      offerTitle:
        offerTitle.value,

      offerMessage:
        offerMessage.value,

      offerEnabled:
        offerToggle.checked,

      wifiPassword:
        wifiPassword.value,

      cafeTiming:
        cafeTiming.value

    }
  );

  alert("Changes Saved ✅");
