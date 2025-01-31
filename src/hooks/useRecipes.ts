import { useQuery } from "@tanstack/react-query";
import { fetchAllRecipes } from "@api/themealdb";
import { IRecipe } from "types/IRecipe";

export function useRecipes() {
    return useQuery<IRecipe[]>({
        queryKey: ["recipes"],
        queryFn: fetchAllRecipes
    })
}