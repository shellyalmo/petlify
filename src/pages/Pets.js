import PetCard from "../components/PetCard";
import React, { useState } from "react";
import loadingGif from "../assets/loading.gif";
import SearchPets from "../components/SearchPets";
import usePetSearch from "../hooks/usePetSearch";

const Pets = () => {
  const [species, setSpecies] = useState("cats");
  const [breed, setBreed] = useState(null);

  const { pets, loading, error } = usePetSearch(species, breed);

  return (
    <>
      <h2>החיות שלנו</h2>
      <SearchPets
        species={species}
        setSpecies={setSpecies}
        breed={breed}
        setBreed={setBreed}
      />
      <div className="grid-4">
        {loading && (
          <div>
            <img src={loadingGif} alt="loading" />
          </div>
        )}
        {error && <h3>Error: something went wrong </h3>}
        {/* get rid of the index */}
        {pets.map((pet) => {
          return (
            pet && <PetCard key={pet.id} petImg={pet.url} petId={pet.id} />
          );
        })}
      </div>
    </>
  );
};

export default Pets;
