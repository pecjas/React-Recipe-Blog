import React, { Component } from 'react';
// import '../bootstrap.css';

export default class Home extends Component {
  render() {
    var styleObj = {height: '300px'}
    return(
      <React.Fragment>
        <div>
        <h1>Home Page</h1>
        <div style={styleObj}>
        <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
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
          <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
        </div>
        </div>
        </div>
      </React.Fragment>
    )
  }
}