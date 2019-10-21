import React from "react";
import styled from "styled-components";
import TrollianWindowUI from "../../components/TrollianWindowUI";
import ChatMessages from "../ChatMessages";

//Fixed styles here
const Header = styled.div`
background-color: #ff2612;
color: white;
`;

const HeaderText = styled.h3`
margin: 0;
padding: 0.25em;
font-size: 1.2em;
font-family: Courier;
font-weight: normal;
color: white;
border: 2px solid #c2c2c2;
border-left: none;
border-right: none;
`;

const GrayInnerWrapper = styled.div`
border: 2px solid #c2c2c2;
border-top: none;
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;
`;

const HeaderWrapper = styled.div`
margin-left: 0.5em;
border-left: 2px solid #c2c2c2;
border-bottom-left-radius: 6px;
`;

const BottomBar = styled.div`
background-color: #b2b2b2;
`;

const InlineForm = styled.form`
display: flex;
`;

const LongInput = styled.input`
flex: 1;
`;

class TrollianChat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            speaker: "AA",
            incomingMessage: ""
        };
    }

    setNewMessage = (speaker, message) => {
        //we have received a new message!  push it to the array and set state
        const allMessages = this.state.messages;
        //if we are over 50 messages, start truncating the older things
        if (allMessages.length > 50) {
            allMessages.shift();
        }
        allMessages.push({ character: speaker, message: message });
        this.setState({ messages: allMessages });
    };

    handleInputChange = event => {
        event.preventDefault();
        //check if we are hitting enter -- if so, we are going to update a lot of stuff
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const finishedMessage = this.state.incomingMessage;
        const currentSpeaker = this.state.speaker;

        //update our message stack
        this.setNewMessage(currentSpeaker, finishedMessage);

        //now clear out the form itself
        this.setState({
            speaker: currentSpeaker,
            incomingMessage: ""
        });
    };

    render() {
        return (
            <TrollianWindowUI backgroundColor="#797979">
                <GrayInnerWrapper>
                    <HeaderWrapper>
                        <Header>
                            <HeaderText>Bulletin Board: TEAM ADORABLOODTHIRSTY.</HeaderText>
                        </Header>
                        <ChatMessages messages={this.state.messages} />
                    </HeaderWrapper>
                    <BottomBar>
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
                            <LongInput type="text" name="incomingMessage" onChange={this.handleInputChange} value={this.state.incomingMessage}  autoFocus={true} />
                        </InlineForm>
                    </BottomBar>
                </GrayInnerWrapper>
            </TrollianWindowUI>
        );

    }

}
export default TrollianChat;