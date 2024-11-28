import React from "react";
import { HeaderModificada, Imagem, Titulo } from "./styles";

export default function HeaderComponente(props) {
  return (
    <>
      <HeaderModificada>
        <Titulo>Título da Página {props.pagina}</Titulo>
        <Imagem src={props.foto} alt="Desenho de uma casa" />
      </HeaderModificada>
    </>
  );
}
