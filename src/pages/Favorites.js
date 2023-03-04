import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore/lite";

import PetCard from "../components/PetCard";
import { useEffect, useState } from "react";

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

async function readFavorites(db) {
  const favoritesCollection = collection(db, "favorites");
  const favoritesSnapshot = await getDocs(favoritesCollection);
  const favoritesList = favoritesSnapshot.docs.map((doc) => doc.data());
  return favoritesList;
}

export async function CreateNewFavorite(petId, petImage, userId, visited) {
  await setDoc(doc(db, "favorites", window.crypto.randomUUID()), {
    pet_id: petId,
    pet_image: petImage,
    user_id: userId,
    visited: visited,
  });
}

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    readFavorites(db).then(setFavorites);
  }, []);

  return (
    <div>
      {favorites.map((favorite) => {
        return <PetCard key={favorite.pet_id} petImg={favorite.pet_image} />;
      })}
    </div>
  );
};

export default Favorites;
