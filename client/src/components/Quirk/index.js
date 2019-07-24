import React, { Component } from "react";

class Quirk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name || "",
            prefix: props.prefix || "",
            suffix: props.suffix || "",
            previous: props.previous || "",
            current: props.current || ""
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    createQuirk = () => {
        return {
            name: this.state.name || "",
            prefix: this.state.prefix || "",
            suffix: this.state.suffix || "",
            previous: this.state.previous || "",
            current: this.state.current || ""
        };
    }

    render() {
        return (
            <div>
                <label htmlFor="name">Name:</label>
                <input name="name" value={this.state.name} onChange={this.handleInputChange} /><br></br>
                <label htmlFor="prefix">Prefix:</label>
                <input name="prefix" value={this.state.prefix} onChange={this.handleInputChange} />
                <label htmlFor="suffix">Suffix:</label>
                <input name="suffix" value={this.state.suffix} onChange={this.handleInputChange} />
                <br />
                <label htmlFor="replace">Replace:</label>
                <input name="previous" value={this.state.previous} onChange={this.handleInputChange} />
                <label htmlFor="replace">With:</label>
                <input name="current" value={this.state.current} onChange={this.handleInputChange} />
                <button type="submit" className="btn btn-primary" onClick={() =>  this.props.onClick(this.createQuirk())}>Submit</button>
                <br />
            </div>
        );
    }

}

export default Quirk;