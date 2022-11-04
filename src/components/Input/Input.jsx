import React from "react";
import styled from "styled-components";
import { primaryColor, secundaryColor } from "../UI/Variaveis";

const InputField = styled.div`
    margin: 0 0 36px 0;
    :last-child {
        margin: 0;  
    }
`

const LabelText = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: 300;
`
const InputText = styled.input`
    width: 100%;
    padding: 24px;
    background-color: ${primaryColor};
    color: #f2f2f2;
    font-size: 18px;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Input = ({label, placeholder, required, alterado, valor}) => {

    const entradaUsuario = (evento) => {
        alterado(evento.target.value);
    }

    return(
        <InputField>
            <LabelText>{label}</LabelText>
            <InputText onChange={entradaUsuario} value={valor} type="text" placeholder={placeholder} required={required}/>
        </InputField>
    )
}