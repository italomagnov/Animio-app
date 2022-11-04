import React, { useState } from "react";
import styled from "styled-components";
import { ButtonCreate } from "../ButtonCreate/ButtonCreate";
import { Input } from "../Input/Input";
import { ListaDias, ListaGeneros } from "../ListaSuspensa/ListaSuspensa";
import { Portrait } from "../Portrait/Portrait";
import { secundaryColor } from "../UI/Variaveis";

const SectionForm = styled.section`
  display: flex;
  justify-content: center;
  margin: 64px 0;
`;

const FormStyle = styled.form`
  max-width: 1024px;
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

export const Formulario = (props) => {

  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [dia, setDia] = useState('');
  const [genero, setGenero] = useState('');

  const Salvar = (evento) => {
    evento.preventDefault();
    props.AnimeCadastrado({
      nome,
      imagem,
      dia,
      genero
    });
    setNome('');
    setImagem('');
    setDia('');
    setGenero('');
  }


  return (
    <SectionForm>
      <FormStyle onSubmit={Salvar}>
        <Text>Preencha os campos para criar o card do anime</Text>
        <InputForm>
          <ContentInput>
            <Input 
              required={true}
              label="Nome" 
              placeholder="Digite o nome do anime" 
              valor={nome}
              alterado={valor => setNome(valor)}
            />
            <Input
              required={true}
              label="Imagem"
              placeholder="Insira o caminho da imagem"
              valor={imagem}
              alterado={valor => setImagem(valor)}
            />
            <ListaDias 
              required={true}
              label='Dias'
              dias={props.dias}
              valor={dia}
              alterado={valor => setDia(valor)}
            />
            <ListaGeneros 
              required={true}
              label='Gêneros'
              genre={props.genero}
              valor={genero}
              alterado={valor => setGenero(valor)}
            />
          </ContentInput>
          <Portrait />  
        </InputForm>
        <ButtonCreate />
      </FormStyle>
    </SectionForm>
  );
};
