import {StyledTitle, StyledParagraph, StyledTag} from '../../../styles/typography'
import {StyledButton} from "../../buttons";
import {StyledBanner} from "./style";
import Charizard from "../../../assets/download.jpeg"

export const MainBanner = () => {

    return (
        <StyledBanner>
            <div className="flexGrid">
                <div className="content">
                    <StyledTag backgroundColor="red">RPG</StyledTag>
                    <StyledTitle tag="h1" fontWeight={700} fontSize="lg">Lorem Ipsum Pokéworld</StyledTitle>
                    <div className="priceBox">
                        <StyledParagraph fontSize="md" opacity={1}>
                            <strong>R$ 299,00</strong>
                        </StyledParagraph>
                        <StyledButton buttonStyle="solid" buttonSize="lg">
                            Comprar
                        </StyledButton>
                    </div>
                </div>
                <div className="imageGrid">
                    <img src={Charizard} alt="Charizard"/>
                </div>
            </div>
        </StyledBanner>
    )
}