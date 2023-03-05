import React, { useState } from "react";
import heart from "../assets/filled-heart.png";
import emptyHeart from "../assets/empty-heart.png";
import {
  createNewFavorite,
  deleteFavorite,
  updateFavorite,
} from "../firebase_setup/firebase.js";

const PetCard = ({ petImg, petId, currentPage, visited }) => {
  const [favorited, setFavorited] = useState(currentPage === "favorites");

  const handleClick = () => {
    if (favorited === false) {
      createNewFavorite(petId, petImg, "2", false);
    } else {
      deleteFavorite(petId, "2");
    }
    setFavorited(!favorited);
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
              onChange={(e) => updateFavorite(petId, "2", e.target.checked)}
            />
            <label htmlFor="visited">ביקרתי</label>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetCard;
