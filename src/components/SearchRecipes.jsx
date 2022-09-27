import { useState } from "react";


export const SearchRecipes = ({ onNewSearch }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
      setInputValue(target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // setInputValue('');
        onNewSearch(inputValue.trim());
        setInputValue('')
    };

  return (
    <form className="search-recipes" onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder='Search for recipes...' 
          value = {inputValue}
          onChange={onInputChange}
        />
        <button onClick={(value => onNewSearch(value))} >Search</button>
        <button>Reset</button>
    </form>
  )
}
