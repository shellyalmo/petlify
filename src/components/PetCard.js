import React, { useState, useEffect } from "react";
import heart from "../assets/filled-heart.png";
import emptyHeart from "../assets/empty-heart.png";
import {
  createNewFavorite,
  deleteFavorite,
  updateFavorite,
  isPetFavorited,
} from "../firebase_setup/firebase.js";
import useLogin from "../hooks/useLogin";

const PetCard = ({ petImg, petId, currentPage, visited }) => {
  const [favorited, setFavorited] = useState(false);
  const [loggedIn, user] = useLogin();

  useEffect(() => {
    const checkPetInDb = async () => {
      const alreadyFavorited = await isPetFavorited(petId, user.uid);
      setFavorited(alreadyFavorited);
    };
    if (loggedIn) {
      checkPetInDb();
    }
  }, [petId, user?.uid, loggedIn]);

  const handleClick = () => {
    if (loggedIn) {
      if (favorited === false) {
        createNewFavorite(petId, petImg, user.uid, false);
      } else {
        deleteFavorite(petId, user.uid);
      }
      setFavorited(!favorited);
    }
  };

  return currentPage === "favorites" && !favorited ? null : (
    <div>
      <div className="card">
        <img
          className="like-btn"
          src={favorited ? heart : emptyHeart}
          alt="like button"
          onClick={handleClick}
        />
        <img src={petImg} alt="cat" />
        {currentPage === "favorites" && (
          <div>
            <input
              type="checkbox"
              id="visited"
              name="visited"
              defaultChecked={visited}
              onChange={(e) =>
                updateFavorite(petId, user.uid, e.target.checked)
              }
            />
            <label htmlFor="visited"> ביקרתי </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetCard;
