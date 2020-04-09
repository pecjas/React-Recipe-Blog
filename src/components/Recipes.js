import React from 'react';
import SearchBar from './forms/SearchBar';
import AllRecipes from './AllRecipes';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe_id: ""
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center">Find a Recipe</h1>
        <SearchBar id="searchBar" />
        <AllRecipes />
      </React.Fragment>
    );
  }
}

export default Recipes;