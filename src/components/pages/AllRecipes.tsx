import React from "react";
import { Header } from "@organisms/Header";
import { useRecipes } from "@hooks/useRecipes";
import { IRecipe } from "types/IRecipe";
import { Button } from "@atoms/Button";
import { useNavigate } from "react-router-dom";
import { RecipeCard } from "@molecules/RecipeCard";
import { useFavoriteStore } from "@store/useFavoriteStore";
import "./globals.css"


export function AllRecipes() {

  const { data: recipes, isLoading, isError, error, refetch } = useRecipes();
  const { favorites, addFavorite, removeFavorite } = useFavoriteStore();
  const isFavorite = favorites.some((fav) => fav.idMeal === recipe.idMeal);

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
           <h1 className="title">Toutes les recettes</h1>
           <div className="recipes-grid">
            {recipes?.map((recipe: IRecipe) => (
              <RecipeCard 
              key={recipe.idMeal}
              id={recipe.idMeal}
              title={recipe.strMeal}
              image={recipe.strMealThumb}
              />
            ))}
            </div>
         </main>
       </>
    )
  }
  