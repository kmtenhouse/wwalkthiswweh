import React from "react";
import styled from "styled-components";

function Form(props) {
    const InlineForm = styled.form`
        display: flex;
    `;

    const LongInput = styled.input`
     flex: 1;
    `;
    
    return (
        <InlineForm>
            <select name="speaker">
                <option>CG</option>
                <option>TA</option>
            </select>
            <LongInput type="text" name="message" value={props.message} />
        </InlineForm>
    );

}

export default Form;