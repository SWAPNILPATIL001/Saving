// firebase.js  (type=module import file)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// --- Replace with your config if needed (this is your mandalsaving config) ---
const firebaseConfig = {
  apiKey: "AIzaSyCMzIzcShaNZrAtmxAE-_sY2JQuXn_zOdg",
  authDomain: "mandalsaving.firebaseapp.com",
  projectId: "mandalsaving",
  storageBucket: "mandalsaving.firebasestorage.app",
  messagingSenderId: "383737474637",
  appId: "1:383737474637:web:27a89d42deaf12337b7604",
  measurementId: "G-20NVPLXBK2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
