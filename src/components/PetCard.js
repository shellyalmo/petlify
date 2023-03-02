import React, { useState } from "react";
import heart from "../assets/filled-heart.png";
import emptyHeart from "../assets/empty-heart.png";

const PetCard = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="card">
        <h3>בנגלי</h3>
        <img
          className="like-btn"
          src={active ? heart : emptyHeart}
          alt="like button"
          onClick={handleClick}
        />
        <img src="https://cdn2.thecatapi.com/images/ZocD-pQxd.jpg" alt="cat" />
      </div>
    </div>
  );
};

export default PetCard;
