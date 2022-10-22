import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ColorsTheme, GlobalStyle} from './styles/global';
import {ThemeProvider} from "styled-components";

/**
 * O "index.tsx" é o topo da aplicação. Ao inserirmos o
 * "GlobalStyle", estamos aplicando o CSS desse componente
 * na aplicação inteira, resetando o seu comportamento.
 */

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <GlobalStyle/>
        <ThemeProvider theme={ColorsTheme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
);