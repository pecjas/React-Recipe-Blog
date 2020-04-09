import React from 'react';
import { TextArea } from './Input';

export default function Comments(props) {
    return (
        <TextArea id={props.id} rows={props.rows} label="Comments" placeholder="Your comments here" />
    );
}