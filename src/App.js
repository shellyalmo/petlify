import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SharedLayout } from "./components";
import { Home, About, Favorites } from "./pages";
import Pet from "./pages/Pet";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/:species/:id" element={<Pet />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
