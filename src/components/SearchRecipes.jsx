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
        // setInputValue('')
    };

  return (
    <form className="input-group px-4 w-50" onSubmit={onSubmit}>
        <input 
          className="form-control"
          type="text" 
          placeholder='Search for recipes...' 
          value = {inputValue}
          onChange={onInputChange}
        />
        <button 
          onClick={value => onNewSearch(value)}
          className="btn btn-outline-secondary"
        >
          Search
        </button>
        <button 
          onClick={() => setInputValue('')}
          className="btn btn-outline-secondary"
        >
          Reset
        </button>
    </form>
  )
}
