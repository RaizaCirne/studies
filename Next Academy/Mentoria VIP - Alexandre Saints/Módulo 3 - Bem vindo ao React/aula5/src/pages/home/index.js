import React from "react";
import home from "../../assets/images/home.jpg";
import { HeaderModificada } from "./styles";

export default function Home() {
  return (
    <>
      <HeaderModificada>
        <h1>Título da Página Home</h1>
        <img src={home} alt="Desenho de uma casa" style={{ width: 700 }} />
      </HeaderModificada>
      <h1>Olá, essa é a página Home</h1>
    </>
  );
}
