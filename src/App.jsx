import { useEffect, useState } from 'react';
import { CardRecipe, SearchRecipes } from './components';
import { getRecipes } from './helpers/getRecipes';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  const onNewSearch = ( newQuery ) => {
    setQuery( newQuery );
  }
  const allRecipes = async(searhQuery) => {
     const res = await getRecipes(searhQuery)
     setRecipes(res)
  }


  useEffect(() => {
    allRecipes(query);
  }, [query])
 

  return (
    <>
      <h1 className="display-1 text-succes  ">Recipes</h1>
      <hr />
      <SearchRecipes  onNewSearch={onNewSearch} />
      <CardRecipe recipes={recipes} />
      
    </>
  )
}

export default App
