import React, { Component } from 'react';

class Form extends Component {
    state = {
        name: "Tassa",
        chatline: "",
        prefix: "",
        suffix: "",
        previous: "",
        current: "",
        pesterlog: []
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleKeyUp = event => {
        if (event.key === "Enter") {
            //move the thing currently in the state to our pesterlog -> it's done!
            const newLine = this.renderQuirk(this.state.chatline);
            const pesterlog = this.state.pesterlog;
            pesterlog.push(newLine);
            this.setState({ pesterlog });
        }
    }

    renderQuirk = (str) => {
        const replaceRegexp = new RegExp(this.state.previous, "g");
        if (this.state.previous !== "") {
            str = str.replace(replaceRegexp, this.state.current);
        }
        return ((this.state.prefix || "") + str + (this.state.suffix || ""));
    }

    render() {
        return (
            <div>
                <h2>Customize your quirk and then type in the magic box below!</h2>
                <label htmlFor="prefix">Prefix:</label>
                <input name="prefix" value={this.state.prefix} onChange={this.handleInputChange} />
                <label htmlFor="suffix">Suffix:</label>
                <input name="suffix" value={this.state.suffix} onChange={this.handleInputChange} />
                <br />
                <label htmlFor="replace">Replace:</label>
                <input name="previous" value={this.state.previous} onChange={this.handleInputChange} />
                <label htmlFor="replace">With:</label>
                <input name="current" value={this.state.current} onChange={this.handleInputChange} />
                <br />
                <label htmlFor="chatline">chatline:</label>
                <input name="chatline" value={this.state.chatline} onKeyUp={this.handleKeyUp} onChange={this.handleInputChange} />
                <p>{(this.state.chatline ? this.renderQuirk(this.state.chatline) : "")}</p>
                {this.state.pesterlog.map((line, index) => {
                    return <p key={index} >{line}</p>
                })}
            </div>
        );
    }
}

export default Form;