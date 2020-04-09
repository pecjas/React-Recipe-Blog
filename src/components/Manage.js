import React from 'react';
import '../bootstrap.css';
import {RecipeContext} from '../context';
import Firebase from 'firebase';
import config from '../config';
import ManageRecipeForm from './forms/ManageRecipeForm';

export default class Manage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //Set state
    }
  }

  componentDidMount() {
    console.log(this.context);
    
  }

  render() {
    let urlParams = new URLSearchParams(window.location.search);

    return (
      <React.Fragment>
      <h1 className="text-center">Manage Recipe</h1>
      <h3 className="text-center">{this.context.default}</h3>
      <h3 className="text-center">{urlParams.get('recipe_id')}</h3>
      <ManageRecipeForm />
      </React.Fragment>
    );
  }
}

Manage.contextType = RecipeContext;
