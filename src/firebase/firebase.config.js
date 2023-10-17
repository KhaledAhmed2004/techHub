import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDt54sCYpP7mFBwtPAubHv_lv-AuHDrmu8",
  authDomain: "technology-and-electroni-ebb95.firebaseapp.com",
  projectId: "technology-and-electroni-ebb95",
  storageBucket: "technology-and-electroni-ebb95.appspot.com",
  messagingSenderId: "1068226899879",
  appId: "1:1068226899879:web:f193b3aad3e45848ae9082",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
