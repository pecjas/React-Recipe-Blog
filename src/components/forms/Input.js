import React from 'react';

export default function Input(props) {
    const element = <input type={props.type} className="form-control" id={props.type} placeholder={props.placeholder} />; 
    return (
        FormGroup(props, element)
    );
}

export function TextArea(props) {
    const element = <textarea class="form-control" id={props.id} rows={props.height} placeholder={props.placeholder} />
    return(
        FormGroup(props, element)
    )
}

function FormGroup(props, element) {
    return (
        <div class="form-group">
            <label for={props.id}>{props.label}</label>
            {element}
        </div>
    )
}