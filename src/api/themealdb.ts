import axios from "axios";
import { IRecipe } from "types/IRecipe";

export const fetchAllRecipes = async(): Promise<IRecipe[]> => {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    return response.data.meals;
}


export const fetchSpecificRecipe = async (id: string): Promise<IRecipe | null> => {
    const response = await axios.get<{ meals: IRecipe[] }>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    return response.data.meals?.[0] ?? null;
}