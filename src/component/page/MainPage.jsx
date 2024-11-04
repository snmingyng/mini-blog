import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import PostList from '../list/PostList';
import Button from '../ui/Button';
import data from '../../data.json';

//만들어놓은 컴포넌트들을 연결

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100%-32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function MainPage(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <Button //버튼 컴포넌트 이용
                    title='글 작성하기'
                    onClick={() => {
                        navigate('/post-write');
                    }}
                />

                <PostList   //포스트리스트 컴포넌트 이용
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;

