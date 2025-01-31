import { Header } from "@organisms/Header";
import { useParams } from "react-router-dom";
import { useSpecificRecipe } from "@hooks/useSpecificRecipe";

export function SpecificRecipe() {
  const { id } = useParams<{ id: string }>();
  const { data: recipe, isLoading, isError, error, refetch } = useSpecificRecipe(id!);

  if (isLoading) {
    return<div>Chargement....</div>
  }

  if (isError || !recipe) {
    return<div>Erreur lors du chargement</div>
  }


    return (
    <>
        <Header />
         <main>
         <h1>{recipe.strMeal}</h1>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} width="100px" />
                <h2>Ingredients :</h2>
                <p>{recipe.strIngredient1} {recipe.strMeasure1}</p>
                <p>{recipe.strIngredient2} {recipe.strMeasure2}</p>
                <p>{recipe.strIngredient3} {recipe.strMeasure3}</p>
                <p>{recipe.strIngredient4} {recipe.strMeasure4}</p>
                <p>{recipe.strIngredient5} {recipe.strMeasure5}</p>
                <p>{recipe.strIngredient6} {recipe.strMeasure6}</p>
                <p>{recipe.strIngredient7} {recipe.strMeasure7}</p>
                <p>{recipe.strIngredient8} {recipe.strMeasure8}</p>
                <p>{recipe.strIngredient9} {recipe.strMeasure9}</p>
                <p>{recipe.strIngredient10} {recipe.strMeasure10}</p>
                <p>{recipe.strIngredient11} {recipe.strMeasure11}</p>
                <p>{recipe.strIngredient12} {recipe.strMeasure12}</p>
                <p>{recipe.strIngredient13} {recipe.strMeasure13}</p>
                <p>{recipe.strIngredient14} {recipe.strMeasure14}</p>
                <p>{recipe.strIngredient15} {recipe.strMeasure15}</p>
                <p>{recipe.strIngredient16} {recipe.strMeasure16}</p>
                <p>{recipe.strIngredient17} {recipe.strMeasure17}</p>
                <p>{recipe.strIngredient18} {recipe.strMeasure18}</p>
                <p>{recipe.strIngredient19} {recipe.strMeasure19}</p>
                <p>{recipe.strIngredient20} {recipe.strMeasure20}</p>
                <h2>Instructions :</h2>
                <p>{recipe.strInstructions}</p>
         </main>
    </>
    )
  }
