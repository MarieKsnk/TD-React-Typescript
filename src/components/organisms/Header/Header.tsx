import { Link } from "react-router-dom";
import "./Header.css"

export const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/">THE MEAL DB TP</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/recettes">Voir toutes les recettes</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}