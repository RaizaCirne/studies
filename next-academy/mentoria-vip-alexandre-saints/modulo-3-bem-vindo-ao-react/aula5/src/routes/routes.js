import React from "react";
import { Routes, Route } from "react-router-dom";
import Config from "../pages/config";
import Home from "../pages/home";

export default function Rotas() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Config />} path="/configuracoes" />
    </Routes>
  );
}
