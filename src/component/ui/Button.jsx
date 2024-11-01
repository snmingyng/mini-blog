import React from "react";
import styled from "styled-components";

const StyledButton = styled.button` //스타일 지정
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;

`;

function Button(props) {   
    const{ title, onClick } = props;    
    
    //props로 받은 title이 표시되도록 함
    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;