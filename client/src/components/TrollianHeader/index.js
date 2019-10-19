import React from "react";
import leftImg from "./trollian-header-long-left.svg";
import rightImg from "./trollian-header-right.svg";
import styled from "styled-components";

function TrollianHeader() {
    const Banner = styled.div`
    margin: 0;
	padding: 0;
	border: 0;
    vertical-align: baseline;
    background-color: #d60006;
    display: flex;
    justify-content: space-between`;

    return (
        <Banner>
            <img src={leftImg} />
            <img src={rightImg} /> 
        </Banner>
    );
}

export default TrollianHeader;