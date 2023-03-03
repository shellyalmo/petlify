import React, { useRef, useEffect } from "react";

const SearchBySpecies = ({ species, setSpecies }) => {
  const dogsRef = useRef();
  const catsRef = useRef();

  useEffect(() => {
    if (species === "dogs") {
      dogsRef.current.checked = true;
      catsRef.current.checked = false;
    } else if (species === "cats") {
      catsRef.current.checked = true;
      dogsRef.current.checked = false;
    }
  }, [species]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSpecies(formData.get("species"));
  };

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
    </div>
  );
};

export default SearchBySpecies;
