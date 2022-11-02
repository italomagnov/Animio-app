import React from "react";
import styled from "styled-components";
import { ButtonCreate } from "../ButtonCreate/ButtonCreate";
import { Input } from "../Input/Input";
import { Portrait } from "../Portrait/Portrait";
import { secundaryColor } from "../UI/Variaveis";

const SectionForm = styled.section`
  display: flex;
  justify-content: center;
  margin: 64px 0;
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 36px 64px;
  background-color: ${secundaryColor};
  border-radius: 20px;
  color: #f2f2f2;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1);
`;

const Text = styled.h2`
  text-align: center;
  margin-bottom: 36px;
`
const InputForm = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 64px;
`

const ContentInput = styled.div`
  width: 100%;
`

export const Form = () => {
  return (
    <SectionForm>
      <FormStyle>
        <Text>Preencha os campos para criar o card do anime</Text>
        <InputForm>
          <ContentInput>
            <Input 
              label="Nome do Anime" 
              placeholder="Digite o nome do anime" 
            />
            <Input
              label="Imagem do Anime"
              placeholder="Insira o caminho da imagem"
            />
            <Input
              label="Gênero do Anime"
              placeholder="Selecione o gênero do anime"
            />
          </ContentInput>
          <Portrait />  
        </InputForm>
        <ButtonCreate />
      </FormStyle>
    </SectionForm>
  );
};
