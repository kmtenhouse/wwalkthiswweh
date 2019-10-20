import React from "react";
import styled from "styled-components";
import TrollianWindowUI from "../../components/TrollianWindowUI";
import MessageInput from "../../components/MessageInput";

function TrollianChat(props) {

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
    `;

    const BottomBar = styled.div`
        background-color: #b2b2b2;
        `;

    return (
        <TrollianWindowUI backgroundColor="#797979">
            <Header>
                <HeaderText>Bulletin Board: TEAM ADORABLOODTHIRSTY</HeaderText>
            </Header>
            <p>Are we really good with this</p>
            <p>Are we really good with this</p>
            <BottomBar>
                <select>
                    <option>CG</option>
                    <option>TA</option>
                </select>
                <input type="text" />
            </BottomBar>
        </TrollianWindowUI>
    );

}

export default TrollianChat;