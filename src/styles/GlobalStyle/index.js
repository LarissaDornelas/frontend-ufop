import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import "./styles.css";
export const GlobalStyle = createGlobalStyle`
${normalize}
body{ 

  background: #eaf0f7;
  font-family: 'Roboto', sans-serif;

  button{
    border: none;
    &:hover{
      opacity: 0.8;
      cursor: pointer;
      
    }
  }
  }
`;
