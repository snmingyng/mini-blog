import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
//Pages
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.p `
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

//App.js에는 라우팅 구현 (라우팅 외에 딱히 하는 역할이 없다)
function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>미니블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage /> }/>
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
