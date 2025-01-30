import { useQuery } from "@tanstack/react-query";
import { fetchAllRecipes } from "@api/themealdb";

export function useRecipes() {
    return useQuery({
        queryKey: ["recipes"],
        queryFn: fetchAllRecipes
    })
}