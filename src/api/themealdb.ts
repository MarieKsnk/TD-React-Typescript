import axios from "axios";

export const fetchAllRecipes = async () => {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    return response.data.meals;
}