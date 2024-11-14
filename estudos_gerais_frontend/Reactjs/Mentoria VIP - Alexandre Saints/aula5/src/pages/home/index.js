import React from "react";
import HeaderComponente from "../../components/header";
import fotoHome from "../../assets/images/home.jpg";
import { Link } from "react-router-dom";
import { cars } from "../../assets/utils/cars";

export default function Home() {
  return (
    <>
      <HeaderComponente pagina="Home" foto={fotoHome} />
      <h1>Olá, essa é a página Home</h1>
      <Link to="/configuracoes">
        <button>Ir para configurações</button>
      </Link>

      {cars.map((item) => {
        return (
          <div onClick={() => alert(`Você clicou no ${item.nome}`)}>
            <h1>{item.nome}</h1>
            <h2>{item.preco}</h2>
          </div>
        );
      })}
    </>
  );
}
