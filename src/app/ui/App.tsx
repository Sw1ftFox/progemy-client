import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/homePage";
import { Registration } from "../../pages/registration/ui/Registration";
import { Authorization } from "../../pages/authorization/ui/Authorization";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/catalog"></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
