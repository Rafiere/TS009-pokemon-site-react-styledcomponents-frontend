import styled, {css} from "styled-components";
import BaseTitle from "./components/typography";

/**
 * Dentro dessa classe, colocaremos todos os estilos de fontes
 * que existem no projeto (para títulos e parágrafos), para que, assim, possamos
 * reaproveitar código.
 */

export const StyledTitle = styled(BaseTitle)`
  font-family: 'Poppins', sans-serif;
  font-weight: ${({fontWeight}) => fontWeight};

  color: ${({theme}) => theme.colors.blue};

  ${({fontSize}) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 44px;
        `
      case "md":
        return css`
          font-size: 20px;
        `
      case "sm":
        return css`
          font-size: 16px
        `
    }
  }}
`

interface iStyledParagraph {
    opacity?: number;
    fontSize: "lg" | "md" | "sm"
}

export const StyledParagraph = styled.p<iStyledParagraph>`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  opacity: ${({opacity}) => opacity ? opacity : .5};

  color: ${({theme}) => theme.colors.blue};

  ${({fontSize}) => {
    switch (fontSize) {
      case 'lg':
        return css`
          font-size: 44px;
          
          //O "media" garante a responsividade.
          
          @media (max-width: 800px){
            font-size: 36px;
          }
          @media (max-width: 400px){
            font-size: 32px;
          }
        `
      case 'md':
        return css`
          font-size: 16px;
        `

      case 'sm':
        return css`
          font-size: 14px;
        `
    }
  }}
    /**
      Estamos selecionando todas as tags "strong" ou
      "b" que estejam dentro do "p".
     */
  strong, b {
    font-weight: 700;
  }
`

interface iStyledTag {
    backgroundColor: "blue" | "red";
}

export const StyledTag = styled.span<iStyledTag>`

  font-size: 20px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  height: 34px;
  
  padding: 0 1.5rem;
  
  color: ${({theme}) => theme.colors.white};
  
  border-radius: 6px;

  ${({backgroundColor, theme}) => {
    switch (backgroundColor) {
      case 'blue':
        return css`
          background: ${theme.colors.blue}
        `
      case 'red':
        return css`
          background: ${theme.colors.red}
        `
    }
  }}
`