import React from "react";
import styled from "styled-components";

function Container(props) {
  //set up any custom css for our container...
  const bgColor = (props.backgroundColor ? `background-color: ${props.backgroundColor};` : "");
  const display = (props.display ? `display: ${props.display};` : `display: block;`);
  const justifyContent = (props.justifyContent ? `justify-content: ${props.justifyContent};` : "");
  const width = (props.width ? `width: ${props.width};` : ``);
  const height = (props.height ? `height: ${props.height};` : ``);
  const flex = (props.flex ? `flex: ${props.flex};` : ``);
  const flexDirection = (props.flexDirection ? `flex-direction: ${props.flexDirection};` : ``);

  //note: we always include some default styling for css reset reasons
  const Container = styled.div`
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
  vertical-align: baseline;
  ${bgColor || ""}
  ${display || ""}
  ${justifyContent || ""}
  ${flex || ""}
  ${width || ""}
  ${height || ""}
  ${flexDirection || ""}
`;
  return (
    <Container className="container">
      {props.children}
    </Container>
  );
}

export default Container;