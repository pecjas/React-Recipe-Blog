import React, { Component } from 'react';
import Name from './Name';
import RecipeVerdict from './RecipeVerdict';
import Hyperlink from './Hyperlink';
import Comments from './Comments';
import { File } from './Input';
import Button from '../Button';

export default class ManageRecipeForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
      <form method="post" onSubmit={this.props.onSubmit}>
        <Name id="recipeName" placeholder="Recipe Name" onChange={this.props.nameChange}/>
        <RecipeVerdict id="recipeVerdict" label="Recipe Verdict" onChange={this.props.verdictChange} />
        <Hyperlink id="recipeLink" placeholder="Link to recipe" onChange={this.props.linkChange} />
        <Comments id="recipeComments" rows="5" onChange={this.props.commentChange} />
        {/* Tags */}
        <File id="recipeImage" label="Select Image" onChange={this.props.imageChange} />
        <Button type="submit" class="my-3" placement="left" title="Save Changes" content="Save" />
      </form>
      </React.Fragment>
    );
  }
}