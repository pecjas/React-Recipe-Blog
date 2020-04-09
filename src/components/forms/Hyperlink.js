import React from 'react';
import Input from './Input';

export default function Hyperlink(props) {
    return (
        <Input id={props.id} label="Link" type="url" placeholder={props.placeholder} />
    );
}