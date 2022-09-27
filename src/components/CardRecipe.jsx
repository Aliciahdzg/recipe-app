

export const CardRecipe = ({ recipes }) => {
    
  return (
    <div>
        {
        recipes.map(recipe => (
        <div key={recipe.id}>
          <h4>{recipe.title}</h4>
          <div>
            <img src={recipe.image} alt={recipe.sourceName} />
          </div>
          <div>
            <p> Ready in {recipe.readyInMinutes} minutes</p>
            <p>Servings {recipe.servings} </p>
          </div>
        </div>
        ))
      }
    </div>
  )
}
