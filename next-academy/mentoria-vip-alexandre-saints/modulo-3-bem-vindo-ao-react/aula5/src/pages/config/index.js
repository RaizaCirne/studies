import React from "react";
import HeaderComponente from "../../components/header";
import configimg from "../../assets/images/config.jpeg";
import { Link } from "react-router-dom";

export default function Config() {
  return (
    <>
      <HeaderComponente pagina="Configurações" foto={configimg} />
      <h1>Essa é a tela de Configurações</h1>
      <Link to="/">
        <p>Ir para Home</p>
      </Link>
    </>
  );
}
