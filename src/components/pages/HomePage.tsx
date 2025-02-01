import { Header } from "@organisms/Header";
import { Button } from "@atoms/Button";
import { Link } from "react-router-dom";
import "./globals.css"
import { useFavoriteStore } from "@store/useFavoriteStore";
import { RecipeCard } from "@molecules/RecipeCard";

export function HomePage() {

  const favorites  = useFavoriteStore((state) => state.favorites);

    return (
    <>
     <Header />
      <main>
        <h1 className="title">Bienvenu</h1>
        <h2> Mes recettes favorites :</h2>
          {favorites.length === 0 ? (
            <p>Vous n'avez pas encore de favoris...</p>
          ) : (
            <div className="favorites-list">
              {favorites.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  id={recipe.idMeal}
                  title={recipe.strMeal}
                  image={recipe.strMealThumb}
                />
              ))}
            </div>
          )}
        <Link to="/recettes">
          <Button label="Voir toutes les recettes" />
        </Link>
      </main>
    </>
    )
  }
  

  