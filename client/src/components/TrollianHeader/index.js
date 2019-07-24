import React from 'react';
import styled from 'styled-components';

function TrollianHeader() {
    const Logo = styled.h1`
        font-size: 1.5em;
    `;

    const Nav = styled.nav`
        background-color: red;
        color: white;
        padding: 0.5em;
    `;

    return (
        <Nav>
            <Logo>Hello</Logo>
        </Nav>
    );
}

export default TrollianHeader;