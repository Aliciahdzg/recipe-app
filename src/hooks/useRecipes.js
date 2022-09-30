import { useState } from 'react';
import { getRecipes } from '../helpers/getRecipes';

export const useRecipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');
    
    const onNewSearch = ( newQuery ) => {
      setQuery( newQuery );
    }
    const allRecipes = async(searhQuery) => {
      try {
        const res = await getRecipes(searhQuery)
        setRecipes(res)
      }
      catch (err) {
        console.error(err)
      }
       
    }
  
    return {
        recipes,
        query,
        onNewSearch,
        allRecipes
    }
}


