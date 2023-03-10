import React, { useEffect } from 'react';
import DetailProductInfo from '../components/product/DetailProductInfo';
import DetailCommentList from '../components/comment/DetailCommentList';
import DetailCommentForm from '../components/comment/DetailCommentForm';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { __getPosts } from '../redux/lib/postsApi';

const Detail = () => {
    const { id } = useParams();

    return (
        <Wrap>
            <Title>{/* <h1>상품 상세 페이지</h1> */}</Title>
            <DetailProductInfo id={id}></DetailProductInfo>
            <DetailCommentList id={id}></DetailCommentList>
            <DetailCommentForm id={id}></DetailCommentForm>
        </Wrap>
    );
};

const Wrap = styled.div`
    max-width: 1200px;
    min-width: 800px;
    height: 100%;
    /* background-color: gray; */
    /* border: 1px solid gray; */
    margin: auto;
    /* display: 'flex';
    justify-content: center; */
`;

const Title = styled.div`
    /* width: 100%; */
    /* margin-top: 100px; */
    margin-bottom: 30px;
    height: 50px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Detail;
