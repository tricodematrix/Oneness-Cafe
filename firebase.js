// ===== IMPORTS =====
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
  const app =
  initializeApp(firebaseConfig);

const db =
  getFirestore(app);

// ===== ELEMENTS =====
const offerBar =
  document.getElementById(
    "specialOfferBar"
  );
  const offerTitleText =
  document.getElementById(
    "offerTitleText"
  );

const offerMessageText =
  document.getElementById(
    "offerMessageText"
  );

const wifiPasswordText =
  document.getElementById(
    "wifiPasswordText"
  );

const cafeTiming =
  document.getElementById(
    "cafeTiming"
  );

  // ===== LOAD DATA =====
async function loadCafeData(){

  const docRef =
    doc(db, "settings", "cafe");

  const docSnap =
    await getDoc(docRef);

  if(docSnap.exists()){

    const data =
      docSnap.data();

    // OFFER
    if(data.offerEnabled){

      offerBar.style.display =
        "block";

      offerTitleText.innerText =
        data.offerTitle;

      offerMessageText.innerText =
        data.offerMessage;

    }
    else{

      offerBar.style.display =
        "none";

    }

    // WIFI
    wifiPasswordText.innerText =
      `Password : ${data.wifiPassword}`;

    // TIMING
    cafeTiming.innerText =
      `🕘 Open Daily : ${data.cafeTiming}`;

  }

}

loadCafeData();



// ===== SAVE FUNCTION =====
window.saveCafeSettings =
async function(settings){

  await setDoc(
    doc(db, "settings", "cafe"),
    settings
  );

  alert("Changes Saved ✅");

}