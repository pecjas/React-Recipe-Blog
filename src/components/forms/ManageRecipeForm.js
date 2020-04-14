import React, { Component } from 'react';
import Name from './Name';
import RecipeVerdict, { Verdicts } from './RecipeVerdict';
import Hyperlink from './Hyperlink';
import Comments from './Comments';
import { File } from './Input';
import Button from '../Button';

export default class ManageRecipeForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    var selectedVerdict = this.props.currentValues.verdict ? this.props.currentValues.verdict : "UNDECIDED"
    
    return (
      <React.Fragment>
      <form method="post" onSubmit={this.props.onSubmit}>
        <Name id="recipeName" placeholder="Recipe Name" onChange={this.props.nameChange} value={this.props.currentValues.name} />
        <RecipeVerdict id="recipeVerdict" label="Recipe Verdict" selected={selectedVerdict} onChange={this.props.verdictChange} />
        <Hyperlink id="recipeLink" placeholder="Link to recipe" onChange={this.props.linkChange} value={this.props.currentValues.link} />
        <Comments id="recipeComments" rows="5" onChange={this.props.commentChange} value={this.props.currentValues.comment} />
        {/* Tags */}
        <File id="recipeImage" label="Select Image" onChange={this.props.imageChange} />
        <Button class="my-3" placement="left" title="Save Changes" content="Save" />
      </form>
      </React.Fragment>
    );
  }
}