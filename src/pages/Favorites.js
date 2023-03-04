import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAmJitc3_Ir7MTmqZwkOKcjLtmWARU0Tlk",
  authDomain: "pets-shelly.firebaseapp.com",
  projectId: "pets-shelly",
  storageBucket: "pets-shelly.appspot.com",
  messagingSenderId: "892716607919",
  appId: "1:892716607919:web:e984ad253e71cf08fda75a",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getFavorites(db) {
  const favoritesCollection = collection(db, "favorites");
  const favoritesSnapshot = await getDocs(favoritesCollection);
  const favoritesList = favoritesSnapshot.docs.map((doc) => doc.data());
  return favoritesList;
}

const Favorites = () => {
  console.log(getFavorites(db));
  return <div></div>;
};

export default Favorites;
