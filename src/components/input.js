import React, {Component} from 'react';

class Input extends Component {
    render() {
        return (
            <>
                <label>{this.props.label}</label>
                <input type={this.props.type} name={this.props.name} value={this.props.value} placeholder={this.props.placeholder} required={this.props.required} />
            </>
        )
    }
};

class Textarea extends Component {
    render() {
        return (
            <>
                <label>{this.props.label}</label>
                <textarea name={this.props.name} value={this.props.value} rows={this.props.rows} placeholder={this.props.placeholder} required={this.props.required}></textarea>
            </>
        )
    }
};

export {Input, Textarea};