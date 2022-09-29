

export const CardRecipe = ({ recipes }) => {
  // console.log(recipes)
    
  return (
    <div className="d-flex flex-row">
        {
        recipes.map(recipe => (
        <div key={recipe.id} className="card my-3 mx-4 w-75" >
          <h4 className="card-title">{recipe.title}</h4>
          <div>
            <img 
              src={recipe.url} 
              alt={recipe.sourceName} 
              className="card-img"
            />
          </div>
        </div>
        ))
      }
    </div>
  )
}
