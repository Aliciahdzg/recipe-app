

export const CardRecipe = ({ recipes }) => {
  // console.log(recipes)
    
  return (
    <>
        {
        recipes.map(recipe => (
        <div key={recipe.id} className="card mb-3 row" style={{ width: "80%"}} >
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
    </>
  )
}
