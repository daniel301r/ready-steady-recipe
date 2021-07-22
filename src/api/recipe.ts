import axios from 'axios';

export const searchRecipe = async (ingredientString: string) => {

    return await axios.post(`http://localhost:5000/searchRecipes`, { ingredientString })
}