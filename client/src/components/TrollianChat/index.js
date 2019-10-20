import React from "react";
import styled from "styled-components";
import TrollianWindowUI from "../../components/TrollianWindowUI";
import Form from "../Form";
import ChatMessages from "../ChatMessages";

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

    const test = [{ character: "CG", message: "Are we good?" }, { character: "TA", message: "Seriously bro" }];

    return (
        <TrollianWindowUI backgroundColor="#797979">
            <GrayInnerWrapper>
                <Wrapper>
                    <Header>
                        <HeaderText>Bulletin Board: TEAM ADORABLOODTHIRSTY.</HeaderText>
                    </Header>
                    <ChatMessages messages={test} />
                </Wrapper>
                <BottomBar>
                    <Form />
                </BottomBar>
            </GrayInnerWrapper>
        </TrollianWindowUI>
    );

}

export default TrollianChat;