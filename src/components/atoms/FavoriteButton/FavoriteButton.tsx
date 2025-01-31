import { IFavoriteButtonProps } from "./FavoriteButton.props";
import { useFavoriteStore } from "@store/useFavoriteStore";
import "./FavoriteButton.css"

export const FavoriteButton: React.FC<IFavoriteButtonProps> = ({ recipe }) => {
    const { favorites, toggleFavorite } = useFavoriteStore();
    const isFavorite = favorites.some((fav) => fav.idMeal === recipe.idMeal);
  
    return (
      <button
        className="favorite-button"
        onClick={() => toggleFavorite(recipe)}>
        {isFavorite ? "❤️" : "🤍"}
      </button>
    );
  };