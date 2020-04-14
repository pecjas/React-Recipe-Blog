import React from 'react';
import { TextArea } from './Input';

export default class Comments extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TextArea id={this.props.id} rows={this.props.rows} label="Comments" placeholder="Your comments here"
                onChange={this.props.onChange} value={this.props.value} />
        );
    }
}