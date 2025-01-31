import { create } from "zustand";
import { IFavorite } from "types/IFavorite";

interface FavoriteStore {
    favorites: IFavorite[];
    toggleFavorite: (recipe: IFavorite) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: [],

  toggleFavorite: (recipe) =>
      set((state) => ({
          favorites: state.favorites.some((fav) => fav.idMeal === recipe.idMeal)
              ? state.favorites.filter((fav) => fav.idMeal !== recipe.idMeal)
              : [...state.favorites, recipe],
      })),
}));