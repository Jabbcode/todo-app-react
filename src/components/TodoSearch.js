import React, { useContext } from 'react';
import '../styles/TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const { 
    searchValue, 
    setSearchValue 
  } = useContext(TodoContext)

  const onSearchValueChange = ( event ) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <input 
      className="TodoSearch" 
      placeholder="Buscar Todo..."      
      value={ searchValue }
      onChange={ onSearchValueChange }
    />
  );
}

export { TodoSearch };