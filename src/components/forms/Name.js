import React from 'react';
import Input from './Input';

export default function Name(props) {
    return (
        <Input id={props.id} label="Name" type="text" placeholder="Your name" />
    );
}