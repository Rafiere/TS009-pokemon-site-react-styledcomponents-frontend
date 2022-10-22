import styled from "styled-components";

/**
 * Dentro desse arquivo, colocaremos os estilos do componente
 * Header.
 */

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  //O "gap" serve para evitar a colisão entre os elementos do Header, assim, eles
  //nunca se tocarão.
  
  gap: 2rem;
  
  .userMenu {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.6rem;
    
    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
    }
    
    button {
      color: ${({theme}) => theme.colors.white};
      transition: 0.4s;
      &:hover {
        color: ${({theme}) => theme.colors.blue};
      }
    }
  }
  
  //Quando a tela chegar em 600px ou menos, os elementos
  //serão dispostos em colunas, garantindo a responsividade.
  @media (max-width: 600px){
    flex-direction: column-reverse;
    
    .userMenu{
      width: 100%;
      justify-content: flex-end;
    }
  }
`

export const StyledHeaderForm = styled.form`
  
    display: inline-flex;
    align-items: center;
    height: 59px;
    padding: 0 1rem;
    background: ${({theme}) => theme.colors.white20};
    border-radius: 10px;
    gap: 1rem;
  
    input {
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: 700;
      color: ${({theme}) => theme.colors.white};
      border: none;
      background: transparent;

      //Esse será o tamanho máximo da caixa de
      //input, sempre garantindo a responsividade
      //para evitar que esse tamanho seja estourado.
      
      //Quando ele precisar ser menos do que 373px, ele
      //responderá de forma automática.
      
      max-width: 373px;
      width: 100%;
      &::placeholder {
        color: ${({theme}) => theme.colors.white50};
      }
    }

  button {
    color: ${({theme}) => theme.colors.white50};
    transition: 0.4s;
    &:hover {
      color: ${({theme}) => theme.colors.white};
    }
  }
  
  @media (max-width: 600px){
    input {
      height: 52px;
    }
  }
`