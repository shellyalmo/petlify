import PetCard from "../components/PetCard";
import { catsApi, dogsApi } from "../api/api";
import React, { useState, useEffect } from "react";

const Pets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchPets = async () => {
      try {
        await dogsApi
          .get("/images/search?limit=10", {
            signal: controller.signal,
          })
          .then((response) => {
            setPets(response.data);
          });
      } catch (error) {
        console.log(error);
        setPets([{ url: `https://http.cat/${error.response.status}` }]);
      }
    };
    fetchPets();
    return () => controller.abort();
  }, []);

  return (
    <>
      <h2>החיות שלנו</h2>
      <div className="grid-4">
        {pets.map((cat, index) => {
          return cat ? (
            <PetCard key={index} catImg={cat.url} />
          ) : (
            <p>Loading...</p>
          );
        })}
      </div>
    </>
  );
};

export default Pets;
