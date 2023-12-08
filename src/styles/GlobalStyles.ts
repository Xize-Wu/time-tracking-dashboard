import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-background-color: hsl(226, 43%, 10%);
    --primary-activity-background-color: hsl(235, 46%, 20%);
    --hover-activity-background-color: hsl(235, 45%, 61%);

    --note-text-color:hsl(236, 100%, 87%);
}

  body{
    background-color: var(--primary-background-color);
    font-family: 'InstrumentSans', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
  }

`;
export default GlobalStyle;
