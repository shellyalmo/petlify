import React, { useState } from "react";
import heart from "../assets/filled-heart.png";
import emptyHeart from "../assets/empty-heart.png";
import {
  createNewFavorite,
  deleteFavorite,
  updateFavorite,
} from "../firebase_setup/firebase.js";
import { user } from "../firebase_setup/googleAuth";

const PetCard = ({ petImg, petId, currentPage, visited }) => {
  const [favorited, setFavorited] = useState(currentPage === "favorites");

  const handleClick = () => {
    if (user) {
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
            <label htmlFor="visited">ביקרתי</label>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetCard;
