import React from "react";
import HeaderComponente from "../../components/header";
import configimg from "../../assets/images/config.jpeg";

export default function Config() {
  return (
    <>
      <HeaderComponente pagina="Configurações" foto={configimg} />
      <h1>Essa é a tela de Configurações</h1>
    </>
  );
}
