import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJ04200GAIqgRI2v9ZT25YomZUr7kfK-E",
  authDomain: "leeloo-marketplace-db.firebaseapp.com",
  projectId: "leeloo-marketplace-db",
  storageBucket: "leeloo-marketplace-db.appspot.com",
  messagingSenderId: "386435325675",
  appId: "1:386435325675:web:0d14a9fd348b980972e8ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
