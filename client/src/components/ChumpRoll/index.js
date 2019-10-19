import React from "react";
import Divider from "../Divider";
import Container from "../Container";
import styled from "styled-components";

function ChumpRoll() {
    const ChumpRollHeader = styled.h3`
    background-color: #ff2612;
    color: #ffffff;
    padding: 0.5em;
    margin: 0;
    display: block;
    vertical-align: baseline;
    text-align: center;
    font-family: Courier;
    font-weight: 600;
    font-size: 1.5em;
    `;

    const ChumpList = styled.ul`
    margin: 0;
	padding: 2em;
	border: 0;
    list-style-type: none;
    background-color: white;
    flex: 1;
    `;

    const Chump = styled.li`
        font-family: "Courier";
        font-size: 1.2em;
        padding-top: 0.5em;
        padding-bottom: 0.25em;
        vertical-align: middle;
    `;

    return (
        <Container display="flex">
            <Divider direction="vertical" bodyColor="#c20f00" borderColor="#5b5b5b" suppressBorder="tbr" />
            <Divider direction="vertical" bodyColor="#ff5f84" borderColor="#c2c2c2" suppressBorder="tb" />
            <Container display="flex" flexDirection="column">
                <Divider direction="horizontal" bodyColor="#ff5f84" borderColor="#c2c2c2" suppressBorder="tlr" />
                <ChumpRollHeader>ChumpRoll</ChumpRollHeader>
                <Divider direction="horizontal" bodyColor="#ff5f84" borderColor="#c2c2c2" suppressBorder="lr" />
                <ChumpList>
                    <Chump>apocalypseArisen</Chump>
                    <Chump>twinArmageddons</Chump>
                </ChumpList>
            </Container>
        </Container>
    );

}

export default ChumpRoll;