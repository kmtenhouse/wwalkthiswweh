import React from "react";
import styled from "styled-components";

const InlineForm = styled.form`
display: flex;
`;

const LongInput = styled.input`
flex: 1;
`;

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            speaker: "CG",
            incomingMessage: ""
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const currentSpeaker = this.state.speaker;
        const currentMsg = this.state.incomingMessage;
        if (this.props.getNewMessage) {
            this.props.getNewMessage(currentSpeaker, currentMsg);
        }
        this.setState({ speaker: currentSpeaker, incomingMessage: "" });
    };

    render() {
        return (
            <InlineForm onSubmit={this.handleSubmit}>
                <select name="speaker" value={this.state.speaker} onChange={this.handleInputChange}>
                    <option>AA</option>
                    <option>AT</option>
                    <option>TA</option>
                    <option>CG</option>
                    <option>AC</option>
                    <option>GA</option>
                    <option>GC</option>
                    <option>AG</option>
                    <option>CT</option>
                    <option>TC</option>
                    <option>CA</option>
                    <option>CC</option>
                </select>
                <LongInput type="text" name="incomingMessage" value={this.state.incomingMessage} onChange={this.handleInputChange} /* autoFocus={true} */ />
            </InlineForm>
        );
    }
}

export default Form;