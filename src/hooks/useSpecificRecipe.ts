import { useQuery } from "@tanstack/react-query";
import { fetchSpecificRecipe } from "@api/themealdb";
import { IRecipe } from "types/IRecipe";

export const useSpecificRecipe = (id?: string) => {
  return useQuery<IRecipe | null>({
    queryKey: ["recipe", id], 
    queryFn: () => fetchSpecificRecipe(id!), 
    enabled: !!id,
  });
};
