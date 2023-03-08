import PetCard from "../components/PetCard";
import { useEffect, useState } from "react";
import { db, readFavorites } from "../firebase_setup/firebase";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    readFavorites(db).then(setFavorites);
  }, []);

  return (
    <div className="grid-4">
      {favorites.map((favorite) => {
        return (
          <PetCard
            key={favorite.pet_id}
            petImg={favorite.pet_image}
            currentPage={"favorites"}
            petId={favorite.pet_id}
            visited={favorite.visited}
            species={favorite.species}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
