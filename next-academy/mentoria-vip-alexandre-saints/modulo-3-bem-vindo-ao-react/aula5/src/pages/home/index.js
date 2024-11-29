import React from "react";
import HeaderComponente from "../../components/header";
import homeimg from "../../assets/images/home.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <HeaderComponente pagina="Home" foto={homeimg} />
      <h1>Olá, essa é a página Home</h1>
      <Link to="configuracoes">
        <p>Ir para Configurações</p>
      </Link>
    </>
  );
}
