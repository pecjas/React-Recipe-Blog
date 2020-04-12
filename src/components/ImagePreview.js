import React from 'react';

export default class ImagePreview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.src){
            return(
                <div className="container text-center">
                    <img className="img-fluid rounded" id="image-preview" src={this.props.src} />
                </div>
            )
        } else {
            return(null)
        }
    }
}