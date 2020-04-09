import React from 'react';
import { RadioOption } from './Input';

export default function RecipeVerdict(props) {
    return (
        <React.Fragment>
        <label htmlFor={props.id}>{props.label}</label>
        <select class="custom-select" id={props.id}>
            <option value="0" >What's the verdict?</option>
            <option value="1" >Good</option>
            <option value="2" >Okay</option>
            <option value="3" >Bad</option>
        </select>
        </React.Fragment>
    );
}