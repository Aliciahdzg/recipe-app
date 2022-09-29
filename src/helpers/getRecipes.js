

export const getRecipes = async( query = '' ) => {
    console.log(query);

    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=e08446d32ec646d48b5d6cfd47188096&sort=random&query=${query}`

    const res = await fetch(url);
    // console.log(res)
    const  { results }  = await res.json();
    console.log(results)
    const recipes = results.map( recipe => ({
        id: recipe.id,
        title: recipe.title,
        url: recipe.image,
    }));
    
    return recipes;
}
