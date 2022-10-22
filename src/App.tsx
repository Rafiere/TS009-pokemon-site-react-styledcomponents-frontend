import React from 'react';
import {StyledTitle} from "./styles/typography";
import {StyledParagraph} from "./styles/typography";
import {StyledButton} from "./styles/buttons";
import Header from "./styles/components/Header";
import {MainBanner} from "./styles/components/MainBanner";

function App() {
    return (
        <div className="App">

            <Header/>
            <MainBanner/>

            <StyledTitle tag="h2" fontWeight={400} fontSize="md">
                Pokémon Dashboard
            </StyledTitle>

            <StyledParagraph fontSize="lg">
                Esta é uma aplicação para o aprendizado da biblioteca Styled Components
            </StyledParagraph>

            <StyledButton buttonSize="md" buttonStyle="solid">
                Teste
            </StyledButton>

            <StyledButton buttonSize="md" buttonStyle="outlined">
                Teste
            </StyledButton>
        </div>
    );
}

export default App;
