import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
  </BrowserRouter>
);

export default App;
