import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import { Wrapper, Content } from './BreadCrumb.styles';

const BreadCrumb = ({ movieTitle }) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Back to Movies</span>
            </Link>
                <span>|</span>
                <span>{movieTitle}</span>
        </Content>
    </Wrapper>
);

export default BreadCrumb;