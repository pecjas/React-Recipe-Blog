import React from 'react';
import SearchBar from './forms/SearchBar';
import AllRecipes from './AllRecipes';

function Search() {
  return (
    <React.Fragment>
      <h1 className="text-center">Find a Recipe</h1>
      <SearchBar id="searchBar" />
      <AllRecipes />
    </React.Fragment>
  );
}

export default Search;