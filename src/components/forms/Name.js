import React from 'react';
import Input from './Input';
import { render } from '@testing-library/react';

export default class Name extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Input id={this.props.id} label="Name" type="text" placeholder={this.props.placeholder} onChange={this.props.onChange} />
        );
    }
}