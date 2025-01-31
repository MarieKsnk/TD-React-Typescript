import { IRecipeCard } from "./RecipeCard.props";
import { Button } from "@atoms/Button";
import { Link } from "react-router-dom";
import "./RecipeCard.css"

export const RecipeCard: React.FC<IRecipeCard> = ({ id, title, image, onClick }) => {
    return (
    <div className="recipe-card">
        <img className="recipe-image" src={image} alt="{title}" />
        <div className="recipe-content">
            <h3 className="recipe-title">{title}</h3>
            <Link to={`/recette/${id}`}>
                <Button label="Voir la recette" />
            </Link>
        </div>
    </div>
    )
}