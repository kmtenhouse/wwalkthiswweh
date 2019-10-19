import React from "react";
import Divider from "../Divider";
import Container from "../Container";
import styled from "styled-components";

function ChumpRoll() {
    const ChumpList = styled.ul`
    margin: 0;
	padding: 2em;
	border: 0;
	font-size: 100%;
	font: inherit;
    vertical-align: baseline;
    list-style-type: none;
    `;

    const Chump = styled.li`
        font-family: "Courier";
        font-size: 1.5em;
    `;

    const ChumpRollHeader = styled.h3`
    background-color: #ff2612;
    color: #ffffff;
    padding: 0.5em;
    margin: 0;
    display: block;
    vertical-align: baseline;
    text-align: center;
    `;

    const FlexBox = styled.div`
    display: flex;
    `;

    return (
        <Container display="flex">
            <Divider direction="vertical" bodyColor="#c20f00" borderColor="#5b5b5b" suppressBorder="tbr" />
            <Divider direction="vertical" bodyColor="#ff5f84" borderColor="#c2c2c2" suppressBorder="tb" />
            <Container>
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