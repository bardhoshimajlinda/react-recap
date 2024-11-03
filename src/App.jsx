import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FormExample from "./components/FormExample";
import Fruits from "./components/Fruits";
import Travel from "./components/Travel/Travel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/form-example" element={<FormExample />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/travel-journey" element={<Travel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
