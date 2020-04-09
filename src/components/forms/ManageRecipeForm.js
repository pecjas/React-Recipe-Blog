import React, { Component } from 'react';
import Name from './Name';
import RecipeVerdict from './RecipeVerdict';
import Hyperlink from './Hyperlink';
import Comments from './Comments';
import { File } from './Input';

export default class ContactForm extends Component {
  render() {
    return (
      <React.Fragment>
      <form method="post">
        <Name id="recipeName" placeholder="Recipe Name" />
        <RecipeVerdict id="recipeVerdict" label="Recipe Verdict" />
        <Hyperlink id="recipeLink" placeholder="Link to recipe" />
        <Comments id="recipeComments" rows="5" />
        {/* Tags */}
        <File id="recipeImage" label="Select Image"/>
      </form>
      </React.Fragment>
    );
  }
}