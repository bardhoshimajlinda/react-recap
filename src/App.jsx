import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FormExample from "./components/FormExample";
import Fruits from "./components/Fruits";
import BoxPage from "./components/BoxPage";
import Travel from "./components/Travel/Travel";
import Airbnb from "./components/Airbnb/Airbnb";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/form-example" element={<FormExample />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/travel-journey" element={<Travel />} />
        <Route path="/boxes" element={<BoxPage />} />
        <Route path="/airbnb" element={<Airbnb />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
