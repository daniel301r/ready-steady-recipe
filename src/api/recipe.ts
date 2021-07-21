import axios from 'axios';



export const searchRecipe = async (ingredients: string[]) => {
    // this eventually will need to go in the back end to hide the api keys

    return await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken%2Cbasil%2Cgarlic&app_id=57b12bc7&app_key=b685fbec88784c9f24bb169cb978d5e3`)
}