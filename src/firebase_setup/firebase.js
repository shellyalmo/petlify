import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmJitc3_Ir7MTmqZwkOKcjLtmWARU0Tlk",
  authDomain: "pets-shelly.firebaseapp.com",
  projectId: "pets-shelly",
  storageBucket: "pets-shelly.appspot.com",
  messagingSenderId: "892716607919",
  appId: "1:892716607919:web:e984ad253e71cf08fda75a",
};

//initialize firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth();

//crud actions on firestore database
export async function readFavorites(db) {
  const favoritesCollection = collection(db, "favorites");
  const favoritesSnapshot = await getDocs(favoritesCollection);
  const favoritesList = favoritesSnapshot.docs.map((doc) => doc.data());

  const favoritesByUser = favoritesList.filter(
    (favorite) => favorite.user_id === auth.currentUser.uid
  );

  return favoritesByUser;
}

/**
 *
 * @param {string} pet_id
 * @returns {boolean}
 */
export const isPetFavorited = async (petId, userId) => {
  const favoriteCollection = doc(db, "favorites", petId + userId);
  const favoriteDocument = await getDoc(favoriteCollection);
  return favoriteDocument.exists();
};

export async function createNewFavorite(petId, petImage, userId, visited) {
  // eslint-disable-next-line no-restricted-globals
  //addDoc - then no need for pet id
  await setDoc(doc(db, "favorites", petId + userId), {
    pet_id: petId,
    pet_image: petImage,
    user_id: userId,
    visited: visited,
  });
}

export async function updateFavorite(petId, userId, visited) {
  const favoriteRef = doc(db, "favorites", petId + userId);
  await updateDoc(favoriteRef, {
    visited: visited,
  });
}

export async function deleteFavorite(petId, userId) {
  await deleteDoc(doc(db, "favorites", petId + userId));
}

// array of users who like dog
// array of users who visited
//await addDoc
