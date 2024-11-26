import React from "react";
import home from "../../assets/images/home.png";

export default function Home() {
  return (
    <>
      <header>
        <h1>Título da Página Home</h1>
        <img src={home} style={{ width: 700 }} />
      </header>
      <h1>Olá, essa é a página Home</h1>
    </>
  );
}
