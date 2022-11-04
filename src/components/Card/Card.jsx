import React from "react";
import styled from "styled-components";
import { elementsColor } from "../UI/Variaveis";

const AnimeCard = styled.div`
  margin-top: 16px;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.4));
  transition: transform 0.2s;
  :hover {
    transform: scale(1.05);
  }
`;

const ContentCard = styled.div`
  height: 380px;
  img {
    height: 380px;
  }
`;

const Layer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-content: center;
  padding: 24px;
  position: relative;
  height: 143px;
  bottom: 150px;
  background: linear-gradient(360deg, #000000 60%, rgba(0, 0, 0, 0) 100%);
`;

export const Card = ({ nome, imagem, dia, corTitle }) => {
  return (
    <AnimeCard>
      <ContentCard>
        <img
          src={imagem}
          alt={nome}
        />
        <Layer>
          <h3 style={{color: corTitle}}>{nome}</h3>
          <h4 style={{color: elementsColor}}>{dia}</h4>
        </Layer>
      </ContentCard>
    </AnimeCard>
  );
};
