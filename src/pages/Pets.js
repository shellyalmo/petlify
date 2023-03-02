import PetCard from "../components/PetCard";
import { catsApi, dogsApi } from "../api/api";
import React, { useState, useEffect } from "react";

const Pets = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    catsApi
      .get("/images/search?breed_ids=beng&limit=10")
      .then((response) => {
        setCats((oldArray) => [...oldArray, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
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
