import { Link } from "react-router-dom";
import "./Header.css"

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/recettes">Toutes les recettes</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}