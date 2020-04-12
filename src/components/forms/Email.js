import React from 'react';
import Input from './Input';

export default function Email(props) {
    return (
        <Input id={props.id} label="Email" type="email" placeholder="Your email" />
    );
}