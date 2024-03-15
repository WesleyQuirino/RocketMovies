import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
/* 
  font-family: "Roboto", sans-serif;
*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;  
}
body {
  font-family: "Roboto Slab", serif;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND5};
  color: ${({ theme }) => theme.COLORS.WHITE1};
}

body, input, button, textarea{                
  font-family: "Roboto Slab", serif;
  font-size: 16px;
  outline: none;
}

a{
  text-decoration: none;
}

button, a{
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover{
  filter: brightness(0.9);
}

`;