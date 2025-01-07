import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Airbnb from "./pages/Airbnb";
import BoxPage from "./pages/BoxPage";
import FormExample from "./pages/FormExample";
import Fruits from "./pages/Fruits";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ToDo from "./pages/ToDo";
import Travel from "./pages/Travel";
import MemoryGame from "./pages/MemoryGame";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form-example" element={<FormExample />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/airbnb" element={<Airbnb />} />
          <Route path="/travel-journey" element={<Travel />} />
          <Route path="/boxes" element={<BoxPage />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/memory-game" element={<MemoryGame />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
