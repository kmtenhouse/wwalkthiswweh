import React, { Component } from 'react';
import Quirk from "../Quirk";

class Form extends Component {
    state = {
        name: "Tassa",
        chatline: "",
        prefix: "",
        suffix: "",
        previous: "",
        current: "",
        pesterlog: [], 
        quirks: []
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

    saveQuirk = (newQuirk) => {
        console.log("Created a quirk!");
        console.log(newQuirk);
        //(TO-DO) validate if quirk can run -- we'll save it even if it's just 'in progress'
        const quirks = this.state.quirks;
        quirks.push(newQuirk);
        this.setState({ quirks });
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
                <div>
                    {this.state.quirks.map((quirk, index)=><button key={index}>{quirk.name}</button>)}
                </div>
                <Quirk onClick={this.saveQuirk}/>   
                <label htmlFor="chatline">UK:</label>
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