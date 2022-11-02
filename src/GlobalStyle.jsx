import { createGlobalStyle } from "styled-components";
import { primaryColor } from "./components/UI/Variaveis";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
    }
    body {
        background-color: ${primaryColor};
    }
`