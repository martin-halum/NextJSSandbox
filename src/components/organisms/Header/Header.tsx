import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import { PAGES } from './config';

import HeaderItem from '../../molecules/HeaderItem';
import ElevationScroll from '../../atoms/ElevationScroll';

const Header = (props) => {
    const { title } = props;

    return (
        <ElevationScroll {...props}>
            <AppBar position="fixed" color='transparent'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <HeaderItem title={title} pages={PAGES} />
                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
};
export default Header;
