import { Header } from "@organisms/Header";
import { useParams } from "react-router-dom";
import { useSpecificRecipe } from "@hooks/useSpecificRecipe";
import { SpecificRecipeCard } from "@molecules/SpecificRecipeCard";
import { Link } from "react-router-dom";
import { Button } from "@atoms/Button";
import "./globals.css"

export function SpecificRecipe() {

  const { id } = useParams<{ id: string }>();
  const { data: recipe, isLoading, isError, error, refetch } = useSpecificRecipe(id!);

  if (isLoading) {
    return<div>Chargement....</div>
  }

  if (isError || !recipe) {
    return<div>Erreur lors du chargement</div>
  }


  // J'ai du m'aider pour cette partie la parce que je n'y arrivais pas du tout...
  const ingredients: string[] = [];
  const measures: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}` as keyof typeof recipe] as string;
    const measure = recipe[`strMeasure${i}` as keyof typeof recipe] as string;

    if (ingredient) {
      ingredients.push(ingredient || "");
      measures.push(measure || "");
    }
  }


    return (
    <>
        <Header />
         <main>
          <div className="specific-recip-card">
            <SpecificRecipeCard 
              title={recipe.strMeal}
              image={recipe.strMealThumb}
              ingredients={ingredients}
              measures={measures}
              instructions={recipe.strInstructions}
            />
          </div>
          <div className="buttons">
            <Link to="/recettes">
              <Button label="Voir toutes les recettes" />
            </Link>
            <Link to="/">
              <Button label="Retour a l'accueil" />
            </Link>
          </div>
         </main>
    </>
    )
  }
