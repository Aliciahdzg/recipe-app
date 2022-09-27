import { useState } from "react";


export const SearchRecipes = ({ onNewRecipes }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
      setInputValue(target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setInputValue('');
        onNewRecipes(inputValue.trim());
    };

  return (
    <form className="search-recipes" onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder='Search for recipes...' 
          value = {inputValue}
          onChange={onInputChange}
        />
        <button>Search</button>
        <button>Reset</button>
    </form>
  )
}
