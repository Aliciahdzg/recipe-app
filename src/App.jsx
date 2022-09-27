import { useEffect, useState } from 'react';
import { CardRecipe, SearchRecipes } from './components';
import { getRecipes } from './helpers/getRecipes';

function App() {

  const [recipes, setRecipes] = useState([]);

  const onNewRecipes = (newRecipe) => {
    setRecipes([newRecipe]);
  }


  useEffect(() => {
    getRecipes(recipes)
  }, [])
 

  return (
    <>
      <h1 >Recipes</h1>
      <hr />
      <SearchRecipes onNewRecipes={(value) => onNewRecipes(value)} />
      <CardRecipe recipes={recipes} />
      
    </>
  )
}

export default App
