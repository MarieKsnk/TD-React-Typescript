import React from "react";
import { Header } from "@organisms/Header";
import { useRecipes } from "@hooks/useRecipes";


export function AllRecipes() {

  const { data: recipes, isLoading, isError, error, refetch } = useRecipes();

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
            {recipes?.map((recipe: any) => (
              <li key={recipe.idMeal}>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} width="100px" />
                <p>{recipe.strMeal}</p>
              </li>
            ))}
           </ul>
         </main>
       </>
    )
  }
  