import React from "react";
import styled from "styled-components";
import quirkify from "../../utilities/quirks";

function getColor(character) {
    const colorMap = {
        "AA": "a10000",
        "AT": "a25203",
        "TA": "#a1a100",
        "CG": "#626262",
        "AC": "#336601",
        "GA": "#078446",
        "GC": "#008282",
        "AG": "#004182",
        "CT": "#0021cb",
        "TC": "#440a7f",
        "CA": "#6a006a",
        "CC": "#99004d"
    };
    
    return (colorMap[character] || "#000000");
}

function createMessage(obj, index) {
    //takes in a message object 
    //expected properties: the character who is speaking
    
    const FormattedLi = styled.li`
    padding: 0.25em 0;
    font-family: Courier;
    color: ${getColor(obj.character)}
    `;
    //returns a list item with the correct formatting for this character
    return (
        <FormattedLi key={index}> 
            {obj.character}: {quirkify(obj.character, obj.message)}
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
    const formattedMessages = messages.map( (obj, index) => createMessage(obj, index));

    return (
        <ChatContainer>
            <FormattedList>
                {formattedMessages}
            </FormattedList>
        </ChatContainer>
    );
}

export default ChatMessages;