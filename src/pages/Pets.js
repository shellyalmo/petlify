import PetCard from "../components/PetCard";
// import { catsApi, dogsApi } from "../api/api";
import React, { useState /*, useEffect*/ } from "react";
import loadingGif from "../assets/loading.gif";
import SearchBySpecies from "../components/SearchBySpecies";
import usePetSearch from "../hooks/usePetSearch";

const Pets = () => {
  const [species, setSpecies] = useState(null);

  const { pets, loading, error } = usePetSearch(species);
  return (
    <>
      <h2>החיות שלנו</h2>
      <SearchBySpecies species={species} setSpecies={setSpecies} />

      <div className="grid-4">
        {loading && (
          <div>
            <img src={loadingGif} alt="loading" />
          </div>
        )}
        {error && <h3>Error: something went wrong </h3>}
        {pets.map((pet, index) => {
          return pet && <PetCard key={index} petImg={pet.url} />;
        })}
      </div>
    </>
  );
};

export default Pets;
