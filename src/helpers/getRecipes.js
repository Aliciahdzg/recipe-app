

export const getRecipes = async( query = '' ) => {

    const apiKey = 'e08446d32ec646d48b5d6cfd47188096'
    const url = `https://api.spoonacular.com/recipes/complexSearch/?apiKey=${apiKey}&sort=random&number=15&addRecipeInformation=true&query=${query}`;
    const res = await fetch(url);

    const   { results }   = await res.json();
    console.log(results);
    const recipes = results.map( recipe => ({
        id: recipe.id,
        title: recipe.title,
        url: recipe.image,
        sourceUrl: recipe.sourceUrl
    }));
    
    return recipes;
}
