import React, { useState } from "react";
import heart from "../assets/filled-heart.png";
import emptyHeart from "../assets/empty-heart.png";
import { createNewFavorite, deleteFavorite } from "../pages/Favorites";

const PetCard = ({ petImg, petId, currentPage }) => {
  const [favorited, setFavorited] = useState(currentPage === "favorites");

  const handleClick = () => {
    if (favorited === false) {
      createNewFavorite(petId, petImg, "2", false);
    } else {
      deleteFavorite(petId, "2");
    }
    setFavorited(!favorited);
  };

  return (
    <div>
      <div className="card">
        <img
          className="like-btn"
          src={favorited ? heart : emptyHeart}
          alt="like button"
          onClick={handleClick}
        />
        <img src={petImg} alt="cat" />
      </div>
    </div>
  );
};

export default PetCard;
