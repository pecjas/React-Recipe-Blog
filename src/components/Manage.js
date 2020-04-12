import React from 'react';
import '../bootstrap.css';
import {RecipeContext} from '../context';
import Firebase from 'firebase';
import config from '../config';
import ManageRecipeForm from './forms/ManageRecipeForm';
import ImagePreview from './ImagePreview';

export default class Manage extends React.Component {
  constructor(props) {
    super(props);
    this.firebaseStorageRef = Firebase.storage().ref();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleVerdictChange = this.handleVerdictChange.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);

    let urlParams = new URLSearchParams(window.location.search);

    this.state = {
      recipeID: urlParams.get('recipe_id'),
      imagePreviewURL: "",
      image: "",
      recipeDetails: {}
    }
  }

  componentDidMount() {
    this.getRecipeData();
    this.getRecipeImage();
  }

  getRecipeData() {
    let ref = Firebase.database().ref("/recipes/".concat(this.state["recipeID"]));
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState({recipeDetails: state});
    })
  }

  getRecipeImage() {
    let imageRef = this.firebaseStorageRef.child("/recipe_images/".concat(this.state["recipeID"]));
    let manageComponent = this;

    imageRef.getDownloadURL().then(function(url) {
      manageComponent.setState({imagePreviewURL: url})
      });
    }

  handleNameChange = (event) => {
    this.setState({recipeDetails: {
      ...this.state.recipeDetails,
      title: event.target.value}});
  }

  handleVerdictChange = (event) => {
    this.setState({recipeDetails: {
      ...this.state.recipeDetails,
      verdict: event.target.value}});
  }

  handleLinkChange = (event) => {
    this.setState({recipeDetails: {
      ...this.state.recipeDetails,
      link: event.target.value}});
  }

  handleCommentChange = (event) => {
    this.setState({recipeDetails: {
      ...this.state.recipeDetails,
      comment: event.target.value}});
  }

  handleImageChange = (event) => {
    let reader = new FileReader();
    let image = event.target.files[0];

    reader.onloadend = () => {
      this.setState({imagePreviewURL: reader.result})
      console.log(reader.result); 
    }

    if (image) {
      reader.readAsDataURL(event.target.files[0])
    }

    this.setState({image: image})
  }

  handleSubmit = event => {
    console.log(this);
    event.preventDefault();

    this.writeRecipeData();
    this.storeRecipeImage();
  };

  writeRecipeData = () => {
    Firebase.database()
      .ref("/recipes/".concat(this.state["recipeID"]))
      .set(this.state.recipeDetails);
    console.log("DATA SAVED");
  };

  storeRecipeImage = () => {
    const path = "/recipe_images/".concat(this.state.recipeID)
    console.log(path);
    
    var storageRef = this.firebaseStorageRef.child(path)
    storageRef.put(this.state.image)
  }

  render() {
    return (
      <React.Fragment>
      <h1 className="text-center">Manage Recipe</h1>
      <ManageRecipeForm nameRef={this.name} onSubmit={this.handleSubmit} nameChange={this.handleNameChange}
        verdictChange={this.handleVerdictChange} linkChange={this.handleLinkChange} 
        commentChange={this.handleCommentChange} imageChange={this.handleImageChange} />
      <ImagePreview src={this.state.imagePreviewURL} />
      </React.Fragment>
    );
  }
}

Manage.contextType = RecipeContext;
