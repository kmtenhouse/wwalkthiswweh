import React from "react";
import styled from "styled-components";

function TrollianWindowUI(props) {

    const WindowContainer = styled.div`
        margin: 1em auto;
        max-width: 80%;
    `;

    const WindowHeader = styled.div`
        background-color: #e90013;
        border-top-left-radius: 0.5em;
        border-top-right-radius: 0.5em;
        height: 2em;
        display: flex;
        flex-direction: row-reverse;
    `;

    const WindowClose = styled.div`
        color: white;
        margin-right: 0.5em;
        margin-top: 0.25em;
        text-align: center;
        font-family: Courier;
        padding: 0.25em;
    `;

    const WindowBase = styled.div`
        border-color: #c20f00;
        border-bottom-left-radius: 0.5em;
        border-bottom-right-radius: 0.5em;
        border-style: solid;
        ${props.backgroundColor ? `background-color: ${props.backgroundColor}` : `` }
    `;

    return (
        <WindowContainer>
            <WindowHeader>
                <WindowClose>X</WindowClose>
            </WindowHeader>
            <WindowBase>
                {props.children}
            </WindowBase>
        </WindowContainer>
    );
}

export default TrollianWindowUI;