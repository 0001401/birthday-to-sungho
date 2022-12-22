import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Card } from "../pages/Card";
import { Compliment } from "../pages/Compliment";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/Compliment" element={<Compliment />} />
      </Routes>
    </BrowserRouter>
  );
};
