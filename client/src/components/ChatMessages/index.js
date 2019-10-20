import React from "react";
import styled from "styled-components";

function getColor(character) {
    const colorMap = {
        "TA": "#a1a100",
        "CG": "#626262"
    };
    
    return (colorMap[character] || "#000000");
}

function createMessage(obj) {
    //takes in a message object 
    //expected properties: the character who is speaking
    
    const FormattedLi = styled.li`
    padding: 0.25em 0;
    color: ${getColor(obj.character)}
    `;
    //returns a list item with the correct formatting for this character
    return (
        <FormattedLi>
            {obj.character}: {obj.message}
        </FormattedLi>
    );
}

function ChatMessages(props) {
    const ChatContainer = styled.div`
        border: 2px solid #c2c2c2;
        border-left: none;
        border-bottom-right-radius: 6px;
        border-top-right-radius: 6px;
        margin: 0.5em 0.5em 1em 0;
        background-color: white;
        min-height: 300px;
        padding: 0.5em;
    `;

    const FormattedList = styled.ul`
        list-style-type: none;
        margin: 0;
        padding: 0;
    `;

    const { messages } = props;
    const formattedMessages = messages.map(obj => createMessage(obj));

    return (
        <ChatContainer>
            <FormattedList>
                {formattedMessages}
            </FormattedList>
        </ChatContainer>
    );
}

export default ChatMessages;