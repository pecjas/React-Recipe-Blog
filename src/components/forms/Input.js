import React from 'react';

export default function Input(props) {
    const element = <input type={props.type} className="form-control" id={props.type} placeholder={props.placeholder} />; 
    return (
        FormGroup(props, element)
    );
}

export function TextArea(props) {
    const element = <textarea className="form-control" id={props.id} rows={props.rows} placeholder={props.placeholder} />
    return(
        FormGroup(props, element)
    )
}

export function RadioOption(props) {
    return(
        <div className="form-check">
            <label class="form-check-label" for={props.id} >
                {props.label}
            </label>
            <input className="form-check-input" type="radio" name={props.name} id={props.id} value={props.value} />
        </div>
    )
}

export function File(props) {
    return(
        <div className="custom-file">
            <input type="file" className="custom-file-input" id={props.id} />
            <label className="custom-file-label" for={props.id}>Choose file</label>
        </div>
    )
}

function FormGroup(props, element) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    )
}
