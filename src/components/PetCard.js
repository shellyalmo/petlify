import React, { useState } from "react";
import heart from "../assets/filled-heart.png";
import emptyHeart from "../assets/empty-heart.png";
import { CreateNewFavorite } from "../pages/Favorites";

const PetCard = ({ petImg, petId }) => {
  const [favorited, setFavorited] = useState(false);

  const handleClick = () => {
    if (favorited === false) {
      CreateNewFavorite(petId, petImg, "2", false);
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
