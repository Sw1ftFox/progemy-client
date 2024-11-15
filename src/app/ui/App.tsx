import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { HomePage } from "../../pages/homePage";
import { Registration } from "../../pages/registration/index";
import { Authorization } from "../../pages/authorization/index";
import { Profile } from "../../pages/profile";

const App = () => (
  // <BrowserRouter></BrowserRouter> - пока нет сервера, так и живем
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/catalog"></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  </HashRouter>
);

export default App;
