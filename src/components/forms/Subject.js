import React from 'react';
import Input from './Input';

export default function Subject(props) {
    return (
        <Input id={props.id} label="Subject" type="text" placeholder="Email subject" />
    );
}