import React from "react";
import styled from "styled-components";

const Wrapper = styled.div `
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background-color: lightgray;
    }
`;

const TitleText = styled.p `
    font-size: 20px;
    font-weight: 500;
`;

function PostListItem(props) {
    const {post, onClick} = props; //props로 post 객체를 받아온다

    return (
        // post 객체에 들어있는 title 문자열을 표시
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    );
}

export default PostListItem;