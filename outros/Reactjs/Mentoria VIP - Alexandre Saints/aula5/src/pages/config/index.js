import React from "react";
import HeaderComponente from "../../components/header";
import fotoConfig from "../../assets/images/config.jpg";
import { Link } from "react-router-dom";

export default function Config() {
  return (
    <>
      <HeaderComponente pagina="Configurações" foto={fotoConfig} />
      <h1>Essa é a tela de Configurações</h1>
      <Link to="/">
        <p>Ir para Home</p>
      </Link>
    </>
  );
}
