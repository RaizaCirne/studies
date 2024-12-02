import React from "react";
import { Routes, Route } from "react-router-dom";
import Config from "../pages/config";
import Home from "../pages/home";
// import Car from "../pages/car";

export default function Rotas() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Config />} path="/configuracoes" />
      {/* cars.map
      {
        <Route
          element={
            <Car titulo={item.nome} preco={item.preco} path={item.path} />
          }
        />
        // no element criar uma página individual do carro
        // SÓ UMA PÁGINA. Não é uma página para cada carro, esse trabalho o route vai fazer.
        // Na hora de criar a rota de cada carro que vamos criar as props que estão vindo do map.
        // No objeto tem que ter o path para cada carro
      } */}
    </Routes>
  );
}
