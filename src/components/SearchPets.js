import React from "react";

const SearchBySpecies = ({ species, setSpecies, breed, setBreed }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const catBreeds = [
    { value: "pers", display: "פרסי" },
    { value: "mcoo", display: "מיין קון" },
    { value: "siam", display: "סיאמי" },
    { value: "rblu", display: "רוסי כחול" },
  ];

  const dogBreeds = [
    { value: 8, display: "האסקי" },
    { value: 121, display: "גולדן  רטריבר" },
    { value: 193, display: "פומרניאן" },
    { value: 149, display: "לברדור רטריבר" },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>בחרו סוג:</legend>
          <div>
            <input
              type="radio"
              id="dogs"
              name="species"
              value="dogs"
              checked={species === "dogs"}
              onChange={(e) => {
                setSpecies(e.target.value);
              }}
            />
            <label htmlFor="dogs">כלבים</label>
          </div>
          <div>
            <input
              type="radio"
              id="cats"
              name="species"
              value="cats"
              checked={species === "cats"}
              onChange={(e) => {
                setSpecies(e.target.value);
              }}
            />
            <label htmlFor="cats">חתולים</label>
          </div>
          <label for="breed-select">בחרו גזע:</label>
          <select
            name="breeds"
            id="breed-select"
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option value="">--לחצו לבחירה--</option>
            {(species === "cats" ? catBreeds : dogBreeds).map((breed) => {
              return <option value={breed.value}>{breed.display}</option>;
            })}
          </select>
        </fieldset>
      </form>
    </div>
  );
};

export default SearchBySpecies;
