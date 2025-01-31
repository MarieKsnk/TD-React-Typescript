import { ISpecificRecipeCard } from "./SpecificRecipeCard.props";
import "./SpecificRecipeCard.css"

export const SpecificRecipeCard: React.FC<ISpecificRecipeCard> = ({ title, image, ingredients, measures, instructions }) => {
    return (
        <div className="specific-recipe-card">
            <img className="recipe-image" src={image} alt={title} />
            <div className="recipe-content">
                <h2 className="recipe-title">{title}</h2>

                <h3>Ingredients:</h3>
                <ul className="ingredients-list">
                    {ingredients.map((ingredients, index) => (
                        <li key={index}>
                            {measures[index] || ""} {ingredients[index] || ""}
                        </li>
                    ))}
                </ul>

                <h3>Instructions:</h3>
                <p className="recipe-instructions">{instructions}</p>
            </div>

        </div>
    )
}