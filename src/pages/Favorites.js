import React, { useRef } from "react";
import handleSubmit from "../handles/handlesubmit";

const Favorites = () => {
  const dataRef = useRef();
  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = "";
  };
  return (
    <div>
      {" "}
      <div>
        <form onSubmit={submithandler}>
          <input type="text" ref={dataRef} />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Favorites;
