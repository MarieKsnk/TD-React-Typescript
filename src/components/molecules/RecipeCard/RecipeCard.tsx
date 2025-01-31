import { IRecipeCard } from "./RecipeCard.props";
import { Button } from "@atoms/Button";
import { Link } from "react-router-dom";
import { useFavoriteStore } from "@store/useFavoriteStore";
import "./RecipeCard.css"

export const RecipeCard: React.FC<IRecipeCard> = ({ id, title, image, onClick }) => {

      const { favorites, addFavorite, removeFavorite } = useFavoriteStore();
      const isFavorite = favorites.some((fav) => fav.idMeal === recipe.idMeal);

    return (
    <div className="recipe-card">
        <img className="recipe-image" src={image} alt="{title}" />
        <div className="recipe-content">
            <h3 className="recipe-title">{title}</h3>
            <Link to={`/recette/${id}`}>
                <Button label="Voir la recette" />
            </Link>
            // Test avant de le faire en atom //
            <button 
              className={`favorite-button ${isFavorite ? "favorite" : ""}`} 
              onClick={() => (isFavorite ? removeFavorite(recipe.idMeal) : addFavorite(recipe))}>
              {isFavorite ? "❤️" : "🤍"}</button>
        </div>
    </div>
    )
}