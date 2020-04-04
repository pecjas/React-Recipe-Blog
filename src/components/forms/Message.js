import React from 'react';
import { TextArea } from './Input';

export default function Message(props) {
    return (
        <TextArea id={props.id} height={props.height} label="Message" placeholder="Your message here" />
    );
}