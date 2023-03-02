import PetCard from "../components/PetCard";
import { catsApi, dogsApi } from "../api/api";
import React, { useState, useEffect, useRef } from "react";
import loadingGif from "../assets/loading.gif";

const Pets = () => {
  const [pets, setPets] = useState(Array(10).fill(null));
  const [species, setSpecies] = useState(null);
  const dogsRef = useRef();
  const catsRef = useRef();

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

  useEffect(() => {
    if (species === "dogs") {
      dogsRef.current.checked = true;
      catsRef.current.checked = false;
    } else if (species === "cats") {
      catsRef.current.checked = true;
      dogsRef.current.checked = false;
    }
  }, [species]);

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
              ref={dogsRef}
            />
            <label htmlFor="dogs">כלבים</label>
          </div>

          <div>
            <input
              type="radio"
              id="cats"
              name="species"
              value="cats"
              ref={catsRef}
            />
            <label htmlFor="cats">חתולים</label>
          </div>
          <button type="submit">חיפוש</button>
        </fieldset>
      </form>

      <div className="grid-4">
        {pets.map((pet, index) => {
          return pet ? (
            <PetCard key={index} petImg={pet.url} />
          ) : (
            <div>
              <img src={loadingGif} alt="loading" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Pets;
