import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const element =
            <input type={this.props.type} className="form-control" id={this.props.type}
                placeholder={this.props.placeholder} onChange={this.props.onChange} value={this.props.value || ''} />;

        return (
            FormGroup(this.props, element)
        );
    }
}

export class TextArea extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const element = 
            <React.Fragment>
            <textarea className="form-control" id={this.props.id} rows={this.props.rows}
                placeholder={this.props.placeholder} onChange={this.props.onChange} value={this.props.value || ''} />
            </React.Fragment>
        return(
            FormGroup(this.props, element)
        )
    }
}

export function RadioOption(props) {
    return(
        <div className="form-check">
            <label class="form-check-label" htmlFor={props.id} >
                {props.label}
            </label>
            <input className="form-check-input" type="radio" name={props.name} id={props.id} value={props.value || ''} />
        </div>
    )
}

export class File extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="custom-file">
                <input type="file" className="custom-file-input" onChange={this.props.onChange} />
                <label className="custom-file-label" htmlFor={this.props.id} >
                {this.props.label}
                </label>
            </div>
        )
    }
}

function FormGroup(props, element) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    )
}
