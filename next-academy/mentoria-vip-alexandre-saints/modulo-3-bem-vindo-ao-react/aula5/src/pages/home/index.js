import React from "react";
import HeaderComponente from "../../components/header";
import homeimg from "../../assets/images/home.jpg";
import { Link } from "react-router-dom";
import { cars } from "../../assets/utils/cars";

export default function Home() {
  return (
    <>
      <HeaderComponente pagina="Home" foto={homeimg} />
      <h1>Olá, essa é a página Home</h1>
      <Link to="configuracoes">
        <p>Ir para Configurações</p>
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

// Desafio: Criar uma tela individual para cada carro. Clicar no carro e ele ser levado para uma tela individual dele.

// {cars.map((item) => {
//   return (
//     <>
//       <h1>{item.nome}</h1>
//     </>
//   );
// })}

// O map lista todos os nomes dos carros quando colocamos item.nome
// Ex: tem 10 carros dentro do objeto cars.js, então ele cria 10 h1 com o item.nome
// Se eu der um map e criar um route dentro desse map, vai criar 10 rotas para cada carro, certo?
//
