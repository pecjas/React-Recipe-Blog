import React from 'react';
import Input from './Input';

export default class Hyperlink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Input id={this.props.id} label="Link" type="url" placeholder={this.props.placeholder} onChange={this.props.onChange} />
        );
    }
}