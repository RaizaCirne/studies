import React from "react";
import { HeaderModificada, Imagem, Titulo } from "./styles";

export default function HeaderComponente(props) {
  return (
    <HeaderModificada>
      <Titulo>Título da página {props.pagina}</Titulo>
      <Imagem src={props.foto} alt="Foto" />
    </HeaderModificada>
  );
}
