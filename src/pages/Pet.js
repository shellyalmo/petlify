import { json, useParams } from "react-router-dom";
import PetCard from "../components/PetCard";
import usePet from "../hooks/usePet";
import loadingGif from "../assets/loading.gif";

const Pet = () => {
  const { id, species } = useParams();

  const { pet, loading, error } = usePet(id, species);

  return (
    <div>
      {loading && (
        <div>
          <img src={loadingGif} alt="loading" />
        </div>
      )}
      {error && <h3>שגיאה! משהו השתבש</h3>}

      {!loading && (
        <PetCard
          petImg={pet?.url}
          petId={id}
          currentPage={"pet"}
          species={species}
        />
      )}
      {id}
      {pet?.breeds?.[0] && JSON.stringify(pet.breeds[0])}
    </div>
  );
};

export default Pet;
