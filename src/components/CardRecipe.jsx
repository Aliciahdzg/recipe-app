

export const CardRecipe = ({ recipes }) => {
    
  return (
    <div className="row row-cols-3 row-cols-sm-4 g-4 justify-content-center">
        {
        recipes.map(recipe => (
        <div key={recipe.id} className="card mx-4 col py-2" >
          <h6 className="card-title">{recipe.title}</h6>
          <a href={recipe.sourceUrl}>
            <img 
              src={recipe.url} 
              alt={recipe.sourceName} 
              className="card-img"
              
            />
          </a>
        </div>
        ))
      }
    </div>
  )
}
