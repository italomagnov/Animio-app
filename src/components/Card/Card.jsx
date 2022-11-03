import React from "react";
import styled from "styled-components";
import { primaryColor } from "../UI/Variaveis";

const AnimeCard = styled.div`
  margin-top: 16px;
  width: 280px;
`;

const CardHeader = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  padding: 24px;
  position: relative;
  top: 50px;
  background-color: #8378FF;
  color: #f2f2f2;
  border-radius: 0px 60px 0px 50px;
`;

const CardBody = styled.div`
    text-align: center;
    background-color: #525252;
    color: #f2f2f2;
    padding: 64px;
    border-radius: 0px 52px 0px 80px;
`

export const Card = ({ nome, imagem, dia }) => {
  return (
      <AnimeCard>
        <CardHeader>
          <h4 class='title'>Chainsaw Man</h4>
        </CardHeader>
        <CardBody>
          <img src="" alt="" />
          <h4>Seg</h4>
        </CardBody>
      </AnimeCard>
  );
};
