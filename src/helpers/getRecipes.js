

export const getRecipes = async( text ) => {
    
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=e08446d32ec646d48b5d6cfd47188096&query=${text}`
    const res = await fetch(url);
    const { recipes }= await res.json();
    const resultRecipes = recipes.map( recipe => ({
        id: recipe.id,
        title: recipe.title,
        url: recipe.image
    }));
    
    return resultRecipes;
}
