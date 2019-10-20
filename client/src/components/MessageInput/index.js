
import React from "react";
import styled from "styled-components";

function MessageInput(props) {
    return (
        <input type="text" name="message" value={props.message} onChange={props.handleChange} />
    );

}

export default MessageInput;