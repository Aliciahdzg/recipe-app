import { useEffect, useState } from 'react';
import { CardRecipe, SearchRecipes } from './components';
import { useRecipes } from './hooks/useRecipes';


function App() {

  const {allRecipes, onNewSearch, query, recipes} = useRecipes()

  useEffect(() => {
    allRecipes(query);
  }, [query])
 

  return (
    <>
      <div className="my-3 d-flex justify-content-center">
        <img 
          src="/src/assets/icons8-recipe-book-64.png" 
          alt="icon"
          className="img-fluid "
          type="image/png"
        />
        <h1 className="display-1 text-success ms-5">Recipes Ideas</h1>
      </div>
      <hr />
      
      
      <SearchRecipes  onNewSearch={onNewSearch} />
      <CardRecipe recipes={recipes} />
      
    </>
  )
}

export default App
