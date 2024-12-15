import React from "react";

export default function Car(props) {
  return (
    <>
      <h1>{props.titulo}</h1>
    </>

    // colocar um título h1 que vai ser props.titulo
    // <h1>{props.titulo}</h1>
    // Essas props vão estar aguardando informações onde ela vai ser chamada. Igual na header.
  );
}
