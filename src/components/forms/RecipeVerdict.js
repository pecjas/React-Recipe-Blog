import React from 'react';
import { RadioOption } from './Input';

export const Verdicts = {
    UNDECIDED: "What's the verdict?",
    GOOD: "Good",
    OKAY: "Okay",
    BAD: "Bad"
}

export default class RecipeVerdict extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var options = []
        const verdicts = Object.keys(Verdicts)
        
        var value;
        for (var i = 0; i < verdicts.length; i++) {
            value = verdicts[i]

            options.push(
                <option key={i} value={String(value)} >{Verdicts[value]}</option>
            )
        }

        return (
            <React.Fragment>
            <label htmlFor={this.props.id}>{this.props.label}</label>
            <select className="custom-select" id={this.props.id} onChange={this.props.onChange} value={this.props.selected} >
                {options}
            </select>
            </React.Fragment>
        );
    }
}