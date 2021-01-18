import React from 'react';

import { Wrapper, Content, TMDBLogoImg } from './Header.styles';
import TMDBLogo from '../../images/tmdb_logo.svg';

const Header = () => (
    <Wrapper>
        <Content>
            <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
            <h1>Movie Madness</h1>
        </Content>
    </Wrapper>
);

export default Header;