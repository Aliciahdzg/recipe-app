

export const CardRecipe = ({ recipes }) => {
  // console.log(recipes)
    
  return (
    <div>
        {
        recipes.map(recipe => (
        <div key={recipe.id}>
          <h4>{recipe.title}</h4>
          <div>
            <img src={recipe.url} alt={recipe.sourceName} />
          </div>
        </div>
        ))
      }
    </div>
  )
}
