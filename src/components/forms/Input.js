import React from 'react';

export default function Input(props) {
    const element = <input type={props.type} className="form-control" id={props.type} placeholder={props.placeholder} />; 
    return (
        FormGroup(props, element)
    );
}

export function TextArea(props) {
    const element = <textarea className="form-control" id={props.id} rows={props.height} placeholder={props.placeholder} />
    return(
        FormGroup(props, element)
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