import React from "react";
import HeaderComponente from "../../components/header";
import homeimg from "../../assets/images/home.jpg";

export default function Home() {
  return (
    <>
      <HeaderComponente pagina="Home" foto={homeimg} />
      <h1>Olá, essa é a página Home</h1>
    </>
  );
}
