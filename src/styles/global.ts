/**
 * Nesse arquivo, criaremos alguns estilos globais e resetaremos
 * alguns comportamentos.
 */

import { createGlobalStyle } from "styled-components";

/**
 * Dentro do template string (``), podemos escrever
 * CSS.
 */

/**
 * Esse primeiro estilo global é para resetarmos o
 * CSS nativo do navegador.
 */

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;

        /**
        * O "box-sizing" muda o comportamento do "padding" para
        * somar a largura que configuramos. Essa configuração é
        * muito boa para obtermos uma maior facilidade ao diagramarmos
        * com porcentagem.
        */

        box-sizing: border-box; 
    }

    //Abaixo, estamos resetando alguns comportamentos que
    //são padrões de alguns componentes.

    button {
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul, ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    li {
        list-style: 0;
    }
`

export const ColorsTheme = {
    colors: {
        white: "#FFFFFF",
        white20: "rgba(217, 217, 217, 0.15)",
        white50: "rgba(255, 255, 255, 0.5)",
        red: "#F55859",
        blue: "#0F81EC"
    }
}