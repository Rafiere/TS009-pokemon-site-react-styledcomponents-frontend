import {MdSearch, MdNotifications} from "react-icons/md"
import {StyledHeader, StyledHeaderForm} from "./style";
import Avatar  from "../../../assets/download.jpeg";


const Header = () => {
    return (
        <StyledHeader>
            <StyledHeaderForm>
                <button type="submit">
                    <MdSearch size={30}></MdSearch>
                </button>
                <input type="text" name="search" id="search" placeholder="Buscar..."/>
            </StyledHeaderForm>
            <div className='userMenu'>
                <button>
                    <MdNotifications size={30}/>
                </button>

                <img src={Avatar} alt="Nome do Usuário"/>
            </div>

        </StyledHeader>
    )
}

export default Header