import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/homePage";
import { Registration } from "../../pages/registration/index";
import { Authorization } from "../../pages/authorization/index";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/catalog"></Route>
      {/* <Route path="/"></Route> */}
    </Routes>
  </BrowserRouter>
);

export default App;
