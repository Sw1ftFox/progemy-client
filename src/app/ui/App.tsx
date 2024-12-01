import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { HomePage } from "Pages/homePage";
import { Registration } from "Pages/registration";
import { Authorization } from "Pages/authorization";
import { Profile } from "Pages/profile";

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
