import React from "react";
import styled from "styled-components";
import { primaryColor } from "../UI/Variaveis";

const SelectInput = styled.div`
  margin: 0 0 36px 0;
  :last-child {
    margin: 0;
  }
`;

const ListaLabel = styled.label`
  display: block;
  font-size: 24px;
  margin-bottom: 8px;
`;

const ListaSelect = styled.select`
  width: 100%;
  padding: 24px;
  background-color: ${primaryColor};
  color: #f2f2f2;
  font-size: 18px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ListaDias = ({ label, dias, required, valor, alterado }) => {
  return (
    <SelectInput>
      <ListaLabel>{label}</ListaLabel>
      <ListaSelect
        onChange={(evento) => alterado(evento.target.value)}
        value={valor}
        required={required}
      >
        <option value="" key=""></option>
        {dias.map((dia) => (
          <option key={dia}>{dia}</option>
        ))}
      </ListaSelect>
    </SelectInput>
  );
};

export const ListaGeneros = ({ label, genre, required, valor, alterado }) => {
  return (
    <SelectInput>
      <ListaLabel>{label}</ListaLabel>
      <ListaSelect
        onChange={(evento) => alterado(evento.target.value)}
        required={required}
        value={valor}
      >
        <option value="" key=""></option>
        {genre.map((genero) => (
          <option key={genero}>{genero}</option>
        ))}
      </ListaSelect>
    </SelectInput>
  );
};
