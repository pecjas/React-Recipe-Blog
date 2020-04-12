import React from 'react';

export default function Button(props) {
    return (
        <button type={props.type} className={"btn btn-danger ".concat(props.class)} data-toggle="tooltip"
          data-placement={props.placement} title={props.title}>{props.content}</button>
    );
}