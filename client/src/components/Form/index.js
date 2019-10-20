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
                <option>AA</option>
                <option>AT</option>
                <option>TA</option>
                <option>CG</option>
                <option>AC</option>
                <option>GA</option>
                <option>GC</option>
                <option>AG</option>
                <option>CT</option>
                <option>TC</option>
                <option>CA</option>
                <option>CC</option>
            </select>
            <LongInput type="text" name="message" value={props.message} />
        </InlineForm>
    );

}

export default Form;