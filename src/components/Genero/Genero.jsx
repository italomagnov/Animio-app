import React from "react";
import styled from "styled-components";
import { Card } from "../Card/Card";
import { elementsColor, secundaryColor } from "../UI/Variaveis";

const GeneroStyle = styled.section`
  text-align: center;
  padding: 0 12px 64px;
  margin-bottom: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeaderTitle = styled.div`
  position: relative;
  width: 450px;
  bottom: 30px;
  padding: 24px 45px;
  background-color: ${secundaryColor};
  color: ${elementsColor};
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px 0px;
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Genero = ({ animes, nome, corFundo }) => {
  const corBackground = {
    backgroundColor: corFundo,
  };

  const textColor = {
    color: corFundo,
  };

  return (
    animes.length > 0 && (
      <GeneroStyle style={corBackground}>
        <HeaderTitle>
          <h3 style={textColor}>{nome}</h3>
        </HeaderTitle>
        <Cards>
          {animes.map((anime) => (
            <Card
              nome={anime.nome}
              imagem={anime.imagem}
              dia={anime.dia}
              corTitle={corFundo}
            />
          ))}
        </Cards>
      </GeneroStyle>
    )
  );
};
