import React from "react";
import styled from "styled-components";

function Divider(props) {
    //Dividers can be either vertical or horizontal
    //Can customize border color, border thickness, body color, body thickness

    //DIRECTION SETTINGS
    //DIRECTION is required to successfully render a divider
    //(so if we don't provide one, return "")
    //THICKNESS is optional -- defaults to 0.5em
    let direction;
    let thickness = props.thickness || "0.5em";
    if(props.direction === "horizontal") {
        direction=`
        width: 100%;
        height: ${thickness};`;
    } else if (props.direction==="vertical") {
        direction=`
        width: ${thickness};
        height: 100%;`;
    } else {
        return "";
    }

    //BODY SETTINGS
    const backgroundColor = (props.bodyColor ? `background-color: ${props.bodyColor};` : ``);

    //BORDER SETTINGS
    const borderColor = (props.borderColor ? `border-color: ${props.borderColor};` : ``);
    const borderThickness = `border-width: ${props.borderThickness || '0.125em'};`;

    //See if we need to remove any borders
    let removedBorders="";
    if(props.suppressBorder) {
        ["top", "right", "left", "bottom"].forEach(side => {
            let firstChar = side.charAt(0);
            if(props.suppressBorder.includes(firstChar)) {
                removedBorders += `border-${side}: none;`;
            }
        });
    } 

    const Divider = styled.div`
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
    font: inherit;
    display: block;
    vertical-align: baseline;
    ${direction}
    ${backgroundColor}
    border-style: solid;
    ${borderColor}
    ${borderThickness}
    ${removedBorders}
    `;
    return <Divider />;
}


export default Divider;