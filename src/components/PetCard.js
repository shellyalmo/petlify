import React, { useState } from "react";
import heart from "../assets/filled-heart.png";
import emptyHeart from "../assets/empty-heart.png";

const PetCard = ({ petImg }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="card">
        <img
          className="like-btn"
          src={active ? heart : emptyHeart}
          alt="like button"
          onClick={handleClick}
        />
        <img src={petImg} alt="cat" />
      </div>
    </div>
  );
};

export default PetCard;
