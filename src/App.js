import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SharedLayout } from "./components";
import { Home, About, Pets, Favorites } from "./pages";
import handleSubmit from "./handles/handlesubmit";

import { useRef } from "react";

const App = () => {
  const dataRef = useRef();
  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = "";
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="pets" element={<Pets />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </div>
      <div className="App">
        <form onSubmit={submithandler}>
          <input type="text" ref={dataRef} />
          <button type="submit">Save</button>
        </form>
      </div>
    </BrowserRouter>
  );
};

export default App;
