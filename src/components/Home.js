import React, { Component } from 'react';
import RecipeCarousel from './RecipeCarousel'

export default class Home extends Component {
  render() {
    return(
      <React.Fragment>
      <h1 className="mx-auto text-center">Recipe Blog - Home Page</h1>
      <br />
      <RecipeCarousel />
      <br />
      <p className="text-xl">
        This is the about me section, where you can talk about why you have this site and what you hope
        to use it for. More details.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </React.Fragment>
    )
  }
}