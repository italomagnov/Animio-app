import React from "react";
import styled from "styled-components";
import { elementsColor, secundaryColor } from "../UI/Variaveis";

const GeneroStyle = styled.section`
  display: flex;
  text-align: center;
  padding: 0 12px 64px;
  justify-content: center;
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

export const Genero = (props) => {
  const corBackground = {
    backgroundColor: props.backgroundColor,
  };

  return (
    <GeneroStyle style={{ backgroundColor: "red" }}>
      <HeaderTitle>
        <h3>Genero</h3>
      </HeaderTitle>
    </GeneroStyle>
  );
};
