import React from "react";
import styled from "styled-components";

function Container(props) {
  const Container = styled.div`
  background-color: #d2d2d2;
`;
  return (
    <Container>
      {props.children}
    </Container>
  );
}

export default Container;