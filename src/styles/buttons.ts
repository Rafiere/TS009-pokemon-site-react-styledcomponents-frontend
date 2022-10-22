import styled, {css} from "styled-components";

/**
 * Essa interface será utilizada para tiparmos as
 * props.
 */

interface iStyledButtonProps {
  buttonSize:  "sm" | "lg" | "md";
  buttonStyle: "solid" | "outlined";
}

export const StyledButton = styled.button`
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  //O "gap" serve para se o butão tiver algo como um
  //ícone ou texto, para que essas coisas fiquem espaçadas
  //ao invés de ficarem coladas.
  
  gap: .6rem;
  
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  transition: .4s;
  border-radius: 12px;
  
  ${({buttonSize}: iStyledButtonProps) => {
    switch(buttonSize){
      case 'lg':
        return css`
          
          //Não é recomendado colocar uma
          //largura fixa para os botões, por isso que
          //utilizamos o padding "2rem".
          
          height: 69px;
          padding: 0 2rem;
        `
      case 'md':
        return css `
          padding: 0 2rem;
          height: 46px;
        `
      
      case 'sm':
        return css`
          padding: 0 1.5rem;
          height: 42px;
        `
    }
  }}
  
  ${({buttonStyle, theme}) => {
  
    switch(buttonStyle){
      case 'solid':
        return css `
          background: ${theme.colors.blue};
          color: ${theme.colors.white};
        `
      case 'outlined':
        return css `
          border: 1px solid ${theme.colors.blue};
          background: transparent;
          color: ${theme.colors.white};
          &:hover {
            background: ${theme.colors.blue};
        }
        `
    }
  
  }}
  
  &:hover {
    filter: brightness(1.1);
    box-shadow: 0px 4px 25px rgba(255, 249, 249, 0.25);
  }
`