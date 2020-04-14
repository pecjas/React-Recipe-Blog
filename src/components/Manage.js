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
      imagePreviewSrc: "",
      image: "",
      recipeDetails: {},
      originalRecipeDetails: {},
      originalImagePreviewSrc: ""
    }
  }

  componentDidMount() {
    this.getRecipeData();
  }

  getRecipeData() {
    let ref = Firebase.database().ref("/recipes/".concat(this.state["recipeID"]));
    ref.on("value", snapshot => {
      const state = snapshot.val();

      this.setState({recipeDetails: state}, () => {
        this.getRecipeImage();
      });
      this.setState({originalRecipeDetails: state});
    })
  }

  getRecipeImage() {
    if (this.shouldGetRecipeImage()) {
      let imageRef = this.firebaseStorageRef.child("/recipe_images/".concat(this.state["recipeID"]));
      let manageComponent = this;

      imageRef.getDownloadURL().then(function(url) {
        manageComponent.setState({imagePreviewSrc: url})
        manageComponent.setState({originalImagePreviewSrc: url});       
        }).catch(function(error) {
          console.log("Caught error");
          
        })
    }
    }

  shouldGetRecipeImage() {
    return (this.state.recipeDetails.imageStored && this.state.imagePreviewSrc == "")
  }

  handleNameChange = (event) => {
    this.setState({recipeDetails: {
      ...this.state.recipeDetails,
      name: event.target.value}});
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
      this.setState({imagePreviewSrc: reader.result})
    }

    if (image) {
      reader.readAsDataURL(event.target.files[0])
    }

    this.setState({image: image})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    try {
      this.storeRecipeImage();
      this.writeRecipeData(true);
    }
    catch(error) {
      this.writeRecipeData(false);
    }
    return false;
  };

  writeRecipeData = (isImageStored) => {
    var recipeDetails = {
      ...this.state.recipeDetails,
      imageStored: isImageStored
    }

    Firebase.database()
      .ref("/recipes/".concat(this.state["recipeID"]))
      .set(recipeDetails);
    
    this.setState(recipeDetails)
  };

  storeRecipeImage = () => {
    const path = "/recipe_images/".concat(this.state.recipeID)
    
    var storageRef = this.firebaseStorageRef.child(path)
    storageRef.put(this.state.image)
  }

  render() {
    return (
      <React.Fragment>
      <h1 className="text-center">Manage Recipe</h1>
      <ManageRecipeForm nameRef={this.name} onSubmit={this.handleSubmit} nameChange={this.handleNameChange}
        verdictChange={this.handleVerdictChange} linkChange={this.handleLinkChange} 
        commentChange={this.handleCommentChange} imageChange={this.handleImageChange}
        currentValues={this.state.recipeDetails} />
      <ImagePreview src={this.state.imagePreviewSrc} />
      </React.Fragment>
    );
  }
}

Manage.contextType = RecipeContext;
