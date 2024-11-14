import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Config from "../pages/config";

export default function Rotas() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Config />} path="/configuracoes" />
      {/* cars.map
      {
        <Route
          element={<Car titulo={item.nome} preco={item.preco} />}
          path={item.path}
        />
      } */}
    </Routes>
  );
}

// Route dentro do map vai criar 7 rotas pra cada carro
// Criar uma tela individual pra cada carro - clicar no carro e ele ser levado pra uma tela individual dele
// Vai criar uma página só pro carro e o route vai ficar encarregado de fazer varias.
// Desafio: criar uma tela individual pra cada carro ou outra coisa
// Uma tela com foto e quando clica no botão pra comprar leva pra tela individual de cada coisa mostrando título, foto, valor, botão para compra.
