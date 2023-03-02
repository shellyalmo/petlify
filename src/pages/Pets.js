import PetCard from "../components/PetCard";
import { catsApi, dogsApi } from "../api/api";
import React, { useState, useEffect, useRef } from "react";

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchPets = async () => {
      try {
        await (species === "cats" ? catsApi : dogsApi)
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
  }, [species]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSpecies(formData.get("species"));
  };

  return (
    <>
      <h2>החיות שלנו</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>בחרו סוג:</legend>

          <div>
            <input
              type="radio"
              id="dogs"
              name="species"
              value="dogs"
              checked={species === "dogs" ? true : false}
            />
            <label htmlFor="dogs">כלבים</label>
          </div>

          <div>
            <input
              type="radio"
              id="cats"
              name="species"
              value="cats"
              checked={species === "cats" ? true : false}
            />
            <label htmlFor="cats">חתולים</label>
          </div>
          <button type="submit">חיפוש</button>
        </fieldset>
      </form>

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
