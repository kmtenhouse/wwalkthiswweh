import React from "react";
import styled from "styled-components";
import TrollianWindowUI from "../../components/TrollianWindowUI";
import Form from "../Form";
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

const Wrapper = styled.div`
margin-left: 0.5em;
border-left: 2px solid #c2c2c2;
border-bottom-left-radius: 6px;
`;

const BottomBar = styled.div`
background-color: #b2b2b2;
`;

class TrollianChat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    getNewMessage = (speaker, message) => {
        //we have received a new message!  push it to the array and set state
        const allMessages = this.state.messages;
        //if we are over 50 messages, start truncating the older things
        if(allMessages.length > 50) {
            allMessages.shift();
        }
        allMessages.push({ character: speaker, message: message});
        this.setState({ messages: allMessages });
    };


    render() {
        return (
            <TrollianWindowUI backgroundColor="#797979">
                <GrayInnerWrapper>
                    <Wrapper>
                        <Header>
                            <HeaderText>Bulletin Board: TEAM ADORABLOODTHIRSTY.</HeaderText>
                        </Header>
                        <ChatMessages messages={this.state.messages} />
                    </Wrapper>
                    <BottomBar>
                        <Form getNewMessage={this.getNewMessage} />
                    </BottomBar>
                </GrayInnerWrapper>
            </TrollianWindowUI>
        );

    }

}
export default TrollianChat;