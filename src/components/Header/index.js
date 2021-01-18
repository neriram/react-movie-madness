import React from 'react';

import { Wrapper, Content, TMDBLogoImg } from './Header.styles';
import TMDBLogo from '../../images/tmdb_logo.svg';

const Header = () => (
    <Wrapper>
        <Content>
            <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        </Content>
    </Wrapper>
);

export default Header;