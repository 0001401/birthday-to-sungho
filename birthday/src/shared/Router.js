import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Birthday } from "../component/Birthday";
import { Gift } from "../component/Gift";
import { Card } from "../pages/Card";
import { Compliment } from "../pages/Compliment";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/compliment" element={<Compliment />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/gift" element={<Gift />} />
      </Routes>
    </BrowserRouter>
  );
};
