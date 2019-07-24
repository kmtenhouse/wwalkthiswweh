import React from 'react'; 
import styled from 'styled-components';

function TrollianContainer(props) {
    const Container = styled.div`
    background-color: #eeeeee;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 10% auto;
    height: 100vh;`;

    return (
        <Container>
            {props.children}
        </Container>
    );
}

export default TrollianContainer;