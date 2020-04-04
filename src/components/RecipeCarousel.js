import React, { Component } from 'react';

export default class RecipeCarousel extends Component {
  render() {
    return(
      <React.Fragment>
          <div id="recipeCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item recipe-carousel-item active">
                <img className="d-block w-100" src="img/sample1.jpeg" alt="First slide"></img>
              </div>
              <div className="carousel-item recipe-carousel-item">
                <img className="d-block w-100" src="img/sample2.jfif" alt="Second slide"></img>
              </div>
              <div className="carousel-item recipe-carousel-item">
                <img className="d-block w-100" src="img/sample3.jpg" alt="Third slide"></img>
              </div>
            </div>
            <a className="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
      </React.Fragment>
    )
  }
}