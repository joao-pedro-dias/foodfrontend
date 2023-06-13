import { Container } from './styles';
import { Search } from '../../Search';
import { useAuth } from '../../../hooks/auth';
import { useState } from "react";
import logo from "../../../assets/logo.svg";
import close from "../../../assets/close.svg";
import toggleMenu from "../../../assets/toggleMenu.svg";
import search from "../../../assets/search.svg";

export function HeaderAdmin({ onSearch }){

    const { signOut } = useAuth();
    const [searchTerm, setSearchTerm] = useState("");
    const [menuVisible, setMenuVisible] = useState(false);

    function handleInputChange(event) {
      const { value } = event.target;
      setSearchTerm(value);
      onSearch(value);
    }

    const toggle = () => {
      setMenuVisible(!menuVisible);
    };

    return(
        <Container className={menuVisible ? 'expanded' : ''}>

            <div className={`sidebar ${menuVisible ? 'show' : ''}`}>
                <div className="menu-icon" onClick={toggle}>
                    {menuVisible ? (
                        <div className="menuX">
                            <img src={close} alt="ícone em formato de X"/>
                            <h1 className="h1">Menu</h1>
                        </div>

                    ) : (
                        <div>
                            <img src={toggleMenu} alt="ícone de menu com três linhas"/>
                        </div>
                    )}
                </div>
                <div className="menu">
                    <ul>
                        <li className="item">
                            <Search
                                img={search}
                                className="input"
                                placeholder="Busque por pratos ou ingredientes"
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                        </li>
                        <li className="item">
                            <button>Novo prato</button>
                        </li>
                        <li className="item">
                            <button onClick={signOut}>Sair</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="logo">
                <img src={logo} alt="logo em formato de polígono" />
                <h1>food explorer <span> admin</span></h1>
            </div>
        </Container>
    );
}
