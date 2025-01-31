import React from "react";
import { Header } from "@organisms/Header";
import { useRecipes } from "@hooks/useRecipes";
import { IRecipe } from "types/IRecipe";
import { Button } from "@atoms/Button";
import { useNavigate } from "react-router-dom";


export function AllRecipes() {

  const { data: recipes, isLoading, isError, error, refetch } = useRecipes();

  const navigate = useNavigate(); // A CHANGER PLUS SIMPLE ??

  if (isLoading) {
    return<div>Chargement....</div>;
  }

  if (isError) {
    return<div>Erreur lors du chargement</div>
  }


    return (
        <>
        <Header />
         <main>
           <h1>Toutes les recettes :</h1>
           <ul>
            {recipes?.map((recipe: IRecipe) => (
              <li key={recipe.idMeal}>
                <h1>{recipe.strMeal}</h1>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} width="200px" />
                <Button label="Voir la recette"  onClick={() => navigate(`/recette/${recipe.idMeal}`)} />
              </li>
            ))}
           </ul>
         </main>
       </>
    )
  }
  