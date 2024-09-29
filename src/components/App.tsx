import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Main/Header/Header";
import Main from "./Main/Main";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>
);

export default App;
