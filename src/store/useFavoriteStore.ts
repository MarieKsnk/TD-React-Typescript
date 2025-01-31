import { create } from "zustand";
import { IRecipe } from "types/IRecipe";

interface FavoriteStore {
    favorites: IRecipe[];
    addFavorite: (recipe: IRecipe) => void;
    removeFavorite: (id: string) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set, get) => ({
    favorites: [],
  
    addFavorite: (recipe) => {
      set((state) => ({
        favorites: [...state.favorites, recipe], 
      }));
    },
  
    removeFavorite: (id) => {
      set((state) => ({
        favorites: state.favorites.filter((recipe) => recipe.idMeal !== id), 
      }));
    },
  }));