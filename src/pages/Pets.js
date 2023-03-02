import PetCard from "../components/PetCard";
import { catsApi, dogsApi } from "../api/api";
import React, { useState, useEffect } from "react";

const Pets = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchPets = async () => {
      try {
        await catsApi
          .get("/images/search?limit=10", {
            signal: controller.signal,
          })
          .then((response) => {
            setCats(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchPets();
    return () => controller.abort();
  }, []);

  return (
    <>
      <h2>החיות שלנו</h2>
      <div className="grid-4">
        {cats.map((cat, index) => {
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
