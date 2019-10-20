import React from "react";
import styled from "styled-components";
import TrollianWindowUI from "../../components/TrollianWindowUI";
import Form from "../Form";

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

    const ChatContainer = styled.div`
        border: 2px solid #c2c2c2;
        border-left: none;
        border-bottom-right-radius: 6px;
        border-top-right-radius: 6px;
        margin: 0.5em 0.5em 1em 0;
        background-color: white;
    `;

    const BottomBar = styled.div`
        background-color: #b2b2b2;
        `;

    return (
        <TrollianWindowUI backgroundColor="#797979">
            <GrayInnerWrapper>
            <Wrapper>
                <Header>
                    <HeaderText>Bulletin Board: TEAM ADORABLOODTHIRSTY.</HeaderText>
                </Header>

                <ChatContainer>
                    <p>Are we really good with this</p>
                    <p>Are we really good with this</p>
                </ChatContainer>
            </Wrapper>
            <BottomBar>
                <Form />
            </BottomBar>
            </GrayInnerWrapper>
        </TrollianWindowUI>
    );

}

export default TrollianChat;