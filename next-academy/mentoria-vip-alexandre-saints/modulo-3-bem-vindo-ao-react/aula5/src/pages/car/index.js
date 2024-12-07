import React from "react";
import { cars } from "../../assets/utils/cars";

export default function Car() {
  return (
    <>
      {cars.map((item) => {
        return <h1>{item.nome}</h1>;
      })}
    </>

    // colocar um título h1 que vai ser props.titulo
    // <h1>{props.titulo}</h1>
    // Essas props vão estar aguardando informações onde ela vai ser chamada. Igual na header.
  );
}
