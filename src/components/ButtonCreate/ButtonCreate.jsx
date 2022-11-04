import React from "react";
import styled from "styled-components";
import { elementsColor, primaryColor } from "../UI/Variaveis";

const CreateCard = styled.button`
  align-self: center;
  padding: 20px;
  color: #f2f2f2;
  font-size: 18px;
  font-weight: 700;
  border: none;
  background-color: ${primaryColor};
  border-radius: 10px;
  margin-top: 36px;
  cursor: pointer;
  :hover {
    color: ${elementsColor};
  }
  :active {
    box-shadow: 0 5px ${elementsColor};
    transform: translateY(4px);
  }
`;

export const ButtonCreate = () => {
  return <CreateCard>Criar Card</CreateCard>;
};
